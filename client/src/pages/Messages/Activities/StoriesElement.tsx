import React from 'react';
import {Avatar, Stack} from "@mui/material";
import styled from "styled-components";
import Ring from "../../../components/Ring";
import {StoryModel} from "../../../models";

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
  position: relative;
  
  & ~ & {
    margin-left: 20px;
  }
  
`

const StoryAvatar = styled(Avatar)`
  //width: 2.3125rem;
  //height: 2.3125rem;
  width: 37px;
  height: 37px;
`
const UserName = styled.a`
  margin-top: 0.3rem;
  color: ${props => props.theme.colors.fg};
`

interface StoriesElementProps {
    story: StoryModel
}

const StoriesElement = (props: StoriesElementProps) => {
    return (
        <>
            <Title>Stories</Title>
            <StoriesList direction='row'>

                <Story>
                    <StoryAvatar src={props.story.image} />
                    {/*<Ring />*/}
                    <UserName>{props.story.name}</UserName>
                </Story>

            </StoriesList>
        </>
    );
};

export default StoriesElement;