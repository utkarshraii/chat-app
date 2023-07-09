import React from "react";
import { Stack, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../components/global.css";
const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Header />
      {/*Msg */}
      <div className="scrollbar" style={{ overflowY: "auto" }}>
        <Box width="100%">
          <Message />
        </Box>
      </div>
      {/*Chat footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
