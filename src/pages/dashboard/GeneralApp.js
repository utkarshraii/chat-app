import React from "react";
import Chats from "./Chats.js";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Conversation/index.js";
import Contact from "../../components/Contact.js";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          //width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          width: "calc(100vw - 740px)",
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
      {/* {sideBar.open && <Contact />} */}
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
