import React, {useRef, useState} from 'react';
import styled from "styled-components";

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
  padding: 5px 0;
  background: ${props => props.theme.colors.primaryBg};
  
`
interface SwitchProps {
    isChat: boolean
}

const SwitchButton = styled.a<SwitchProps>`
  cursor: pointer;
  padding: 6px 30px;
  font-size: 1rem;
  color: ${props => props.theme.colors.fg};
  transition: all .5s;
`

const ChatButton = styled(SwitchButton)`
  background:  ${props => props.isChat ? '#262626' : 'none'} // props.theme.colors.borderColor
`
const GroupButton = styled(SwitchButton)`
  background:  ${props => props.isChat ? 'none' : '#262626'}
`

const Search = () => {
    const [isChat, setIsChat] = useState(true)
    const chatButton = useRef<HTMLAnchorElement | null>(null)
    const groupsButton = useRef<HTMLAnchorElement>(null)

    if (chatButton.current && chatButton) {
        chatButton.current.addEventListener('click', () => {
            setIsChat(true)
        });
    }

    if (groupsButton.current && groupsButton) {
        groupsButton.current.addEventListener('click', () => {
            setIsChat(false)
        });
    }

    return (
        <Display>
            <ChatButton isChat={isChat}  ref={chatButton}>Chat</ChatButton>
            <GroupButton isChat={isChat} ref={groupsButton}>Groups</GroupButton>
        </Display>
    );
};

export default Search;