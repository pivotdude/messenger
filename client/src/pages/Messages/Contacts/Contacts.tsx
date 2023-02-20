import React from 'react';
import ArrowButton from "@mui/icons-material/KeyboardArrowDown";
import UserDialogList from "./UserDialogList";
import styled from "styled-components";
import {UserDialogModel} from "../../../models";
import Search from "../Messenger/Search";

const Recent = styled.a`
  display: flex;
  font-size: 1.25rem;
  margin-top: 25px;
`

const Contacts = () => {
    const users: Array<UserDialogModel> = [
        {id: 1, name: 'Ole', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lorem purus, sit amet.', time: '2:33pm', image: 'https://wecanmag.com/wp-content/uploads/2019/08/pexels-photo-1036622.jpeg'},
        {id: 2, name: 'Ole', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lorem purus, sit amet.', time: '2:33pm', image: 'https://wecanmag.com/wp-content/uploads/2019/08/pexels-photo-1036622.jpeg'},
        {id: 3, name: 'Ole', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lorem purus, sit amet.', time: '2:33pm', image: 'https://wecanmag.com/wp-content/uploads/2019/08/pexels-photo-1036622.jpeg'},
        {id: 4, name: 'Ole', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lorem purus, sit amet.', time: '2:33pm', image: 'https://wecanmag.com/wp-content/uploads/2019/08/pexels-photo-1036622.jpeg'}
    ]

    return (
        <>
            <Recent>Recent Messages<ArrowButton sx={{marginLeft: 1}}/> </Recent>
            <Search />
            <div>
                <UserDialogList users={users} />
            </div>
        </>
    );
};

export default Contacts;