import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Stack} from "@mui/material";
import Messenger from "./Messenger/Messenger";
import Contacts from "./Contacts/Contacts";
import Activities from "./Activities/Activities";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../models";
import {fetchUsersDialog} from "../../redux/actions";

const Display = styled(Stack)`
  width: 100%;

`
const DisplayForContact = styled.div`
  width: 21%;
  margin-left: 20px;
  @media (max-width: 1230px) {
    display: none;
  }
`

const DisplayForMessenger= styled.div`
  width: 100%;
  @media (max-width: 1230px) {
    width: 100%;
  }
`


const Messages = () => {

    const [showActivity, setShowActivity] = useState<boolean>(false)
    const [showMessages, setShowMessages] = useState<boolean>(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersDialog())
    }, [])

    const authUser = useSelector((state: StateModel) => state.app.authUser)

    console.log(authUser);

    console.log(window.screen.width)
    return (
        <Display direction='row'>
            {showMessages && <DisplayForContact><Contacts /></DisplayForContact> }


            <DisplayForMessenger><Messenger /></DisplayForMessenger>

            {showActivity && <Stack sx={{width: '18%'}}><Activities /></Stack>}


        </Display>
    );
};

export default Messages;