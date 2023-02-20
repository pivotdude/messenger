import React from 'react';
import UserDialog from "./UserDialog";
import {UserDialogModel} from "../../../models";

interface UserDialogListProps {
    users: Array<UserDialogModel>
}

const UserDialogList = (props: UserDialogListProps) => {
    return (
        <>
            {props.users.map(user => <UserDialog user={user} key={user.id} />)}
        </>
    )

};

export default UserDialogList;