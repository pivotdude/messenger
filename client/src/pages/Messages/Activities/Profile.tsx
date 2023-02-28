import React from 'react';
import styled from "styled-components";
import {Avatar} from "@mui/material";
import MyBadge from "../../../components/MyBadge";

const Title = styled.a`
  color: ${props => props.theme.colors.fg};
  font-size: 1.1rem;
  font-weight: bold;
`
const UserAvatar = styled(Avatar)`
  width: 3.125rem;
  height: 3.125rem;
  margin: 0 auto;
`
const UserName = styled.p`
  color: ${props => props.theme.colors.fg};
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
  color: ${props => props.theme.colors.fg};
  font-size: 0.75rem;
  font-style: italic;
`

const Profile = () => {
    return (
        <>
            <Title>Profile</Title>
            <ProfileInfo>
                <MyBadge bg="white">
                    <UserAvatar variant='rounded' />
                </MyBadge>
                <UserName>John</UserName>
                <UserDescription>@_Manlikeope</UserDescription>
            </ProfileInfo>
        </>
    );
};

export default Profile;