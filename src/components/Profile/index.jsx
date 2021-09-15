import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import Text from '../Text';
import Button from '../Button';
import { useAuth } from '../../hooks/useAuth';

const ProfileWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout, user } = useAuth();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = () => {
    logout();
  };

  return (
    <ProfileWrapper>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        isProfile
      >
        {user.imageUrl ? (
          <Avatar src={user?.imageUrl} alt="Profile user" />
        ) : (
          <Avatar src="/broken-image.jpg" />
        )}
      </Button>
      <div>
        <Text color="header" variant="text">
          {user?.givenName}
        </Text>
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </ProfileWrapper>
  );
};

export default Profile;
