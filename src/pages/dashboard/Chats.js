import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import "../../components/global.css";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
import { useEffect } from "react";
import { socket } from "../../socket";
import { useSelector } from "react-redux";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );
  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      // data => list of conversations
    });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",

          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <div className="scrollbar" style={{ overflowY: "auto" }}>
            <Stack direction="column">
              <Stack spacing={2.4}>
                {/* <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })} */}
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {conversations
                  .filter((el) => !el.pinned)
                  .map((el) => {
                    return <ChatElement {...el} />;
                  })}
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Box>

      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
