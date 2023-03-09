import React from 'react';
import {Avatar, IconButton, Stack} from "@mui/material";
import styled, {useTheme} from "styled-components";
import {CurrentUserModel} from "../../../models";
import MyBadge from "../../../components/UI/MyBadge";

const CurrentUserPage = styled(Stack)`
  align-items: center;
  margin: 15px 25px;
  justify-content: space-between;
`
const CurrentUserInfo = styled(Stack)`
  margin-left: 15px;
`
const UserName = styled(Stack)`
  color: ${props => props.theme.colors.fg};
  font-size: 1.25rem;
  font-weight: bold;
`
const Status = styled.a`
  color: ${props => props.theme.colors.fg};
  font-size: 0.875rem;
`
interface CurrentUserProps {
    user: CurrentUserModel
}

const CurrentUser = (props: CurrentUserProps) => {
    const theme = useTheme()
    return (
        <CurrentUserPage direction='row'>
            <Stack direction='row'>
                <MyBadge bg="orange">
                    <Avatar variant='circular' alt="" sx={{width: 50, height: 50}} src={props.user.image}/>
                </MyBadge>
                <CurrentUserInfo direction='column'>
                    <UserName>{props.user.name}</UserName>
                    <Status>{props.user.status}</Status>
                </CurrentUserInfo>
            </Stack>
            <Stack direction='row'>

                <IconButton>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect fill={theme.colors.primaryBg} width="34" height="34" rx="17" />
                        <path fill={theme.colors.fg} fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5714C8 9.15127 9.15127 8 10.5714 8H11.7471C12.4846 8 13.1274 8.50191 13.3063 9.21735L14.2541 13.0087C14.4109 13.636 14.1765 14.2962 13.6592 14.6842L12.5504 15.5158C12.4353 15.6021 12.4102 15.7286 12.4426 15.8169C13.4159 18.4738 15.5262 20.5841 18.1831 21.5574C18.2714 21.5898 18.3979 21.5647 18.4842 21.4496L19.3158 20.3408C19.7038 19.8235 20.364 19.5891 20.9913 19.7459L24.7826 20.6937C25.4981 20.8726 26 21.5154 26 22.2529V23.4286C26 24.8487 24.8487 26 23.4286 26H21.5C14.0442 26 8 19.9558 8 12.5V10.5714Z" />
                    </svg>
                </IconButton>
                <IconButton>
                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect fill={theme.colors.primaryBg} y="0.5" width="33" height="33" rx="16.5"/>
                        <path fill={theme.colors.fg} d="M10.0714 10.5C8.65127 10.5 7.5 11.6641 7.5 13.1V20.9C7.5 22.3359 8.65127 23.5 10.0714 23.5H17.1429C18.563 23.5 19.7143 22.3359 19.7143 20.9V13.1C19.7143 11.6641 18.563 10.5 17.1429 10.5H10.0714Z"/>
                        <path fill={theme.colors.fg} d="M23.3052 22.85L21 20.5192V13.4807L23.3052 11.15C24.1151 10.331 25.5 10.911 25.5 12.0692V21.9307C25.5 23.0889 24.1151 23.6689 23.3052 22.85Z"/>
                    </svg>
                </IconButton>

            </Stack>
        </CurrentUserPage>
    );
};

export default CurrentUser;