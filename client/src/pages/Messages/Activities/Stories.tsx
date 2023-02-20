import React from 'react';
import {Avatar, Stack} from "@mui/material";
import styled from "styled-components";

const Title = styled.a`
  font-size: 0.9rem;
  color: #B7B7B7;
`
const StoriesList = styled(Stack)`
  margin-top: 0.6875rem;
  overflow-y: auto;
  scrollbar-width: thin;
`
const Story = styled(Stack)`
  align-items: center;
  
  & ~ & {
    margin-left: 20px;
  }
  
`
const StoryAvatar = styled(Avatar)`
  width: 2.3125rem;
  height: 2.3125rem;
`
const UserName = styled.a`
  margin-top: 0.3rem;
  color: #000;
`

const Stories = () => {
    return (
        <>
            <Title>Stories</Title>
            <StoriesList direction='row'>

                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>

                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>

                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>

                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>                <Story>
                    <StoryAvatar  />
                    <UserName>John</UserName>
                </Story>


            </StoriesList>
        </>
    );
};

export default Stories;