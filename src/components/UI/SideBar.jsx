import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { NavLink } from "react-router-dom";
import "./SideBar.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const navItems = [
  {
    to: "/",
    text: "Inbox",
    icon: <MailIcon sx={{ color: "white" }} />,
  },
  {
    to: "/sent",
    text: "Mails Sent",
    icon: <MarkEmailReadIcon sx={{ color: "white" }} />,
  },
  {
    to: "/send",
    text: "Send Email",
    icon: <SendIcon sx={{ color: "white" }} />,
  },
  {
    to: "/bin",
    text: "Recycle Bin",
    icon: <DeleteForeverIcon sx={{ color: "white" }} />,
  },
];

const SideBar = () => {
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  return (
    <Box
      sx={{
        width: "15rem",
        height: "100vh",
        bgcolor: "rgb(0,0,0, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ color: "white" }}>
          <ListItem>
            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              sx={{ bgcolor: "rgb(0,0,0, 0.3)", p: "1.6rem" }}
            >
              Mail Box Client <br />
              <Typography variant="caption" color="white">
                By Basantraj Shakti
              </Typography>
            </Typography>
          </ListItem>

          <ListItem>
            <ListItemText primary="" />
          </ListItem>
          <Divider />

          {navItems.map((item) => {
            return (
              <Box key={Math.random()}>
                <ListItem>
                  <ListItemButton component={NavLink} to={item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </nav>

      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          p: "1rem 2rem",
        }}
      >
        <Button
          onClick={logoutHandler}
          variant="contained"
          color="error"
          size="small"
          sx={{ width: "11rem" }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
