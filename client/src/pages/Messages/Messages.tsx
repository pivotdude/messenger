import React from 'react';
import styled from "styled-components";
import {Stack} from "@mui/material";
import Messenger from "./Messenger/Messenger";
import Contacts from "./Contacts/Contacts";
import Activities from "./Activities/Activities";

const Display = styled(Stack)`
  width: 100%;

`
const DisplayForContact = styled.div`
  width: 18%;
  margin-left: 20px;
  @media (max-width: 1230px) {
    display: none;
  }
`

const DislayForMessanger = styled.div`
  width: 85%;
  @media (max-width: 1230px) {
    width: 100%;
  }
`


const Messages = () => {


    console.log(window.screen.width)
    return (
        <Display direction='row'>
            <DisplayForContact>
                <Contacts />
            </DisplayForContact>

            <DislayForMessanger>
                <Messenger />
            </DislayForMessanger>

            {/*<Stack sx={{width: '15%'}}>*/}
            {/*    <Activities />*/}
            {/*</Stack>*/}
        </Display>
    );
};

export default Messages;