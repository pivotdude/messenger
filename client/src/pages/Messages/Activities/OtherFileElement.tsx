import React from 'react';
import Flex from "../../../components/Flex";
import {IconButton} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";

interface OtherFileElementProps {
    image: string,
    title: string,
}

const OtherFileElement = (props: OtherFileElementProps) => {
    return (
        <Flex justify='space-between'>
            <div>
                <IconButton>
                    <img src={props.image} alt=""/>
                </IconButton>
                <a>{props.title}</a>
            </div>
            <KeyboardArrowRight />
        </Flex>
    );
};

export default OtherFileElement;