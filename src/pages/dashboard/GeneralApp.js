import React from "react";
import Chats from "./Chats.js";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Conversation/index.js";
import Contact from "../../components/Contact.js";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages.js";
import StarredMessages from "../../components/StarredMessages.js";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  return (
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
              : theme.palette.background.default,
        }}
      >
        {/* Conversation */}
        <Conversation />
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
  );
};

export default GeneralApp;
