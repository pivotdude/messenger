import React from 'react';
import {Avatar, Badge, IconButton, Stack} from "@mui/material";
import PhoneSvg from "./img/Phone.svg";
import CameraSvg from "./img/Camera.svg";
import styled from "styled-components";
import {CurrentUserModel} from "../../../models";

const CurrentUserPage = styled(Stack)`
  align-items: center;
  margin: 15px 25px;
  justify-content: space-between;
`
const CurrentUserInfo = styled(Stack)`
  margin-left: 15px;
`
const UserName = styled(Stack)`
  font-size: 1.25rem;
  font-weight: bold;
`
const Status = styled.a`
  font-size: 0.875rem;
`
interface CurrentUserProps {
    user: CurrentUserModel
}

const CurrentUser = (props: CurrentUserProps) => {
    return (
        <CurrentUserPage direction='row'>
            <Stack direction='row'>
                <Badge>
                    <Avatar variant='circular' alt="" sx={{width: 50, height: 50}} src={props.user.image}/>
                </Badge>
                <CurrentUserInfo direction='column'>
                    <UserName>{props.user.name}</UserName>
                    <Status>{props.user.status}</Status>
                </CurrentUserInfo>
            </Stack>
            <Stack direction='row'>

                <IconButton>
                    <img src={PhoneSvg} alt=""/>
                </IconButton>
                <IconButton>
                    <img src={CameraSvg} alt=""/>
                </IconButton>

            </Stack>
        </CurrentUserPage>
    );
};

export default CurrentUser;