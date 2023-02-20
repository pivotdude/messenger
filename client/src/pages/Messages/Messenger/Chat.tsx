import React from 'react';
import {IconButton, Stack} from "@mui/material";
import styled from "styled-components";


import MicroSvg from './img/Micro.svg'
import SmileSvg from './img/smile.svg'
import PaperPlaneSvg from './img/PaperPlane.svg'
import ClipSvg from './img/Clip.svg'

const Form = styled.form`
  width: 100%;
`

const MyChat = styled(Stack)`
  margin-top: 1.5rem;
  padding: 1rem 0.625rem;
  width: 100%;
  background: #F5F5F5;
  align-items: center;
`

const ChatInput = styled.input`
  width: 90%;
  background: none;
  font-size: 1.2rem;
  border: none;
  outline: none;
`
const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`





// 10
// 16.5

const Chat = () => {
    return (
        <Form>
            <MyChat direction='row'>

                <ChatInput type='text' placeholder='Type something...' />

                <IconButton>
                    <Icon src={SmileSvg} alt=""/>
                </IconButton>
                <IconButton>
                    <Icon src={MicroSvg} alt=""/>
                </IconButton>
                <IconButton>
                    <Icon src={ClipSvg} alt=""/>
                </IconButton>
                <IconButton>
                    <Icon src={PaperPlaneSvg} alt=""/>
                </IconButton>


            </MyChat>
        </Form>
    );
};

export default Chat;