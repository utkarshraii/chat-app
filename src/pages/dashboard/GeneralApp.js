import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

import { Link, useSearchParams } from "react-router-dom";
import Chats from "./Chats.js";
import Conversation from "../../components/Conversation/index.js";
import Contact from "../../components/Contact.js";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages.js";
import StarredMessages from "../../components/StarredMessages.js";
import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();

  const theme = useTheme();

  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* chats */}
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            //width: "calc(100vw - 740px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "F0F4FA"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          {room_id !== null && chat_type === "individual" ? (
            <Conversation />
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <NoChatSVG />
              <Typography variant="subtitle2">
                <Link
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  new one
                </Link>
              </Typography>
            </Stack>
          )}
        </Box>
        {/* Contact*/}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;
              case "STARRED":
                return <StarredMessages />;
              case "SHARED":
                return <SharedMessages />;
              default:
                break;
            }
          })()}
        {/* <Contact /> */}
      </Stack>
    </>
  );
};

export default GeneralApp;
