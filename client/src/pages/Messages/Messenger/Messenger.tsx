import React from 'react';
import CurrentUser from "./CurrentUser";
import MessageList from "./MessageList";
import Chat from "./Chat";
import {CurrentUserModel, MessageModel} from "../../../models";
import styled from "styled-components";

const MessageListDisplay = styled.div`
  background: ${props => props.theme.colors.primaryBg};
  padding: 5px;
  height: 80vh;
`

const Messenger = () => {

    const messages: Array<MessageModel> = [
        {id: 1, name: 'Ole', time: '12:30', content: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." ', image: ''},
        {id: 2, name: 'Ole', time: '12:30', content: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."', image: ''},
    ]

    const currentUser: CurrentUserModel = {image: 'https://wecanmag.com/wp-content/uploads/2019/08/pexels-photo-1036622.jpeg', name: 'Ole', status: 'Active'}

    return (
        <>
            <CurrentUser user={currentUser} />

            <MessageListDisplay>
                <MessageList messages={messages} />
            </MessageListDisplay>
            <Chat />
        </>
    );
};

export default Messenger;