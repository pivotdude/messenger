import React from 'react';
import styled from "styled-components";
import {Stack} from "@mui/material";
import Messenger from "./Messenger/Messenger";
import Contacts from "./Contacts/Contacts";
import Activities from "./Activities/Activities";

const Display = styled(Stack)`
  width: 100%;
`


const Messages = () => {
    return (
        <Display direction='row'>
            <Stack sx={{width: '15%', marginLeft: '20px'}}>
                <Contacts />
            </Stack>

            <Stack sx={{width: '70%'}}>
                <Messenger />
            </Stack>

            <Stack sx={{width: '15%'}}>
                <Activities />
            </Stack>
        </Display>
    );
};

export default Messages;