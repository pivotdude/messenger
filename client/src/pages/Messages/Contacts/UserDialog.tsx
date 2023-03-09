import React from 'react';
import {Avatar, Badge, Stack} from "@mui/material";
import styled, {useTheme} from "styled-components";
import {UserDialogModel} from "../../../models";
import MyBadge from "../../../components/UI/MyBadge";
import Flex from "../../../components/UI/Flex";

// const us = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || '2em'
// }))`
//   margin: ${props => props.size};
// `

const User = styled(Stack)(() => ({
    '&': {
        alignItems: 'center',
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
  color: ${props => props.theme.colors.fg};
  font-size: 1rem;
  font-weight: bold;
`

const UserLastMessageTime = styled.a`
  color: ${props => props.theme.colors.fg};
  margin-left: 20px;
  font-size: 0.625rem;
`

const UserLastMessage = styled.p`
  color: ${props => props.theme.colors.fg};
  font-size: 0.875rem;
`

const UserAvatar = styled(Avatar)`
  height: 4rem;
  width: 4rem;
`

interface UserDialogProps {
    user: UserDialogModel
}

const UserDialog = (props: UserDialogProps) => {

    let exceptMessage;
    const letterCount = 60;
    if (props.user.message.length > letterCount) {
        exceptMessage = props.user.message.slice(0, letterCount) + " ..."
    }

    return (
        <User direction='row'>
            <Stack sx={{position: 'relative'}}>
                <MyBadge bg="green">
                    <UserAvatar variant='rounded' alt="" src={props.user.image} />
                </MyBadge>
            </Stack>

            <UserInfo>
                <Flex>
                    <UserName>{props.user.name}</UserName>
                    <UserLastMessageTime>{props.user.time}</UserLastMessageTime>
                </Flex>
                <UserLastMessage>{exceptMessage}</UserLastMessage>
            </UserInfo>

        </User>
    );
};

export default UserDialog;