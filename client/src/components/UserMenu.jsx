import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
function UserMenu() {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleLogout = () => {
    auth.signOut();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // console.log({ user });
  return (
    <>
      <Box sx={{ display: "flex" }} onClick={handleClick}>
        <Typography>{displayName}</Typography>
        <Avatar alt="avatar" src={photoURL} sx={{ width: 24, height: 24 }} />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>LogOut</MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
