import React from 'react';
import Stories from "./Stories";
import styled from "styled-components";
import TuneIcon from '@mui/icons-material/Tune';
import Profile from "./Profile";
import Media from "./Media";
import Other from "./Other";
import Flex from "../../../components/Flex";
import {Divider} from "@mui/material";


const Title = styled.a`
  font-size: 1.25rem;
`
const Display = styled.div`
  padding: 1rem;
`

const Activities = () => {

    return (
        <>
            <Display>
                <Flex justify='space-between'>
                    <Title>Activity</Title>
                    <TuneIcon />
                </Flex>
            </Display>


            <Display>
                <Stories />
            </Display>

            <Display>
                <Profile />
            </Display>
            <Divider />

            <Display>
                <Media />
            </Display>

            <Display>
                <Other />
            </Display>
        </>
    );
};

export default Activities;