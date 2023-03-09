import React from 'react';
import Flex from "../../../components/UI/Flex";
import {Button, IconButton} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";
import styled from "styled-components";
import RightArrow from "../../../components/UI/RightArrow";

interface OtherFileElementProps {
    image: string,
    title: string,
}

const ElementTitle = styled.a`
  color: ${props => props.theme.colors.fg};
`

const OtherFileElement = (props: OtherFileElementProps) => {
    return (
        <Flex justify='space-between'>
            <div>
                <IconButton>
                    <img src={props.image} alt=""/>
                </IconButton>
                <ElementTitle>{props.title}</ElementTitle>
            </div>
            <RightArrow />

        </Flex>
    );
};

export default OtherFileElement;