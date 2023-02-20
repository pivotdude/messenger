import React from 'react';
import {Avatar, Stack} from "@mui/material";
import styled from "styled-components";
import {UserDialogModel} from "../../../models";

// const us = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || '2em'
// }))`
//   margin: ${props => props.size};
// `

const User = styled(Stack)(() => ({
    '&': {
        padding: '5px'
    },

    '& + &': {
        marginTop: '35px'
    }
}));

const UserInfo = styled(Stack)`
  margin-left: 15px;
`

const UserName = styled.a`
  font-size: 1rem;
  font-weight: bold;
`

const UserLastMessageTime = styled.a`
  margin-left: 20px;
  font-size: 0.625rem;
`

const UserLastMessage = styled.p`
  font-size: 0.875rem;
`

const UserAvatar = styled(Avatar)`
  height: 3.75rem;
  width: 3.75rem;
`

interface UserDialogProps {
    user: UserDialogModel
}

const UserDialog = (props: UserDialogProps) => {
    return (
        <User direction='row'>
            <Stack>
                <UserAvatar variant='rounded' alt="" src={props.user.image}/>
            </Stack>

            <UserInfo>
                <Stack direction='row' sx={{alignItems: 'center'}}>
                    <UserName>{props.user.name}</UserName>
                    <UserLastMessageTime>{props.user.time}</UserLastMessageTime>
                </Stack>
                <UserLastMessage>{props.user.message}</UserLastMessage>
            </UserInfo>

        </User>
    );
};

export default UserDialog;