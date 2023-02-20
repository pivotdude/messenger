import React from 'react';
import {MessageModel} from "../../../models";
import Message from './Message'

interface MessageListProps {
    messages: Array<MessageModel>
}

const MessageList = (props: MessageListProps) => {
    return (
        <>
            {props.messages.map(message => <Message message={message} key={message.id} />)}
        </>
    );
};

export default MessageList;