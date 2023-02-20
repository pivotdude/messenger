import React from 'react';
import styled from "styled-components";
import DocumentSvg from './img/Document.svg'
import ChannelSvg from './img/Channel.svg'
import GroupsSvg from './img/Groups.svg'
import OtherFileElement from "./OtherFileElement";

const Title = styled.a`
  font-size: 1rem;
  color: #5E5B5B;
`

const Other = () => {
    return (
        <>
            <Title>Other files</Title>
            <OtherFileElement image={DocumentSvg} title='Document' />
            <OtherFileElement image={ChannelSvg} title='Channels' />
            <OtherFileElement image={GroupsSvg} title='Groups' />
        </>
    );
};

export default Other;