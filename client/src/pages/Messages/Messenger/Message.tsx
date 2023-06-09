import React from 'react';
import {Avatar, Stack} from "@mui/material";
import styled from "styled-components";
import {MessageModel} from "../../../models";

const MessageComponent = styled(Stack)`
  padding: 4px;
  & ~ & {
    margin-top: 30px;
  }
`

const UserName = styled.a`
  color: ${props => props.theme.colors.fg};
  font-size: 1rem;
  font-weight: bold;
`
const UserMessageTime = styled.a`
  color: ${props => props.theme.colors.fg};
  margin-left: 20px;
  font-size: 0.625rem;
`
const UserInfo = styled(Stack)`
  margin-left: 15px;
`
const UserMessage = styled.p`
  color: ${props => props.theme.colors.fg};
  font-size: 0.9rem;
  white-space: pre-wrap;
`
interface MessageProps {
    message: MessageModel,
}
const MyAvatar = styled(Avatar)`
  width: 15%;
`

const Message = (props: MessageProps) => {
    return (
        <MessageComponent direction='row'>
            <MyAvatar variant='rounded' alt="" src={props.message.image}/>
            <UserInfo>
                <Stack direction='row' sx={{alignItems: 'center'}}>
                    <UserName>{props.message.name}</UserName>
                    <UserMessageTime>{props.message.time}</UserMessageTime>
                </Stack>
                <UserMessage>{props.message.content}</UserMessage>
            </UserInfo>
        </MessageComponent>
    );
};

export default Message;