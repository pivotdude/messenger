import React from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";

const Title = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
`
const UserAvatar = styled(Avatar)`
  width: 3.125rem;
  height: 3.125rem;
  margin: 0 auto;
`
const UserName = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 0.625rem;
  font-weight: bold;
`
const ProfileInfo = styled.div`
  width: 100%;
  padding: 1rem 0;
  align-items: center;
  text-align: center;
`
const UserDescription = styled.p`
  font-size: 0.75rem;
  font-style: italic;
`

const Profile = () => {
    return (
        <>
            <Title>Profile</Title>
            <ProfileInfo>
                <UserAvatar variant='rounded' />
                <UserName>John</UserName>
                <UserDescription>@_Manlikeope</UserDescription>
            </ProfileInfo>
        </>
    );
};

export default Profile;