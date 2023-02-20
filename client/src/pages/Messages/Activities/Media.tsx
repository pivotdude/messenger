import React from 'react';
import styled from "styled-components";
import Flex from "../../../components/Flex";
import {KeyboardArrowRight} from "@mui/icons-material";

const Title = styled.a`
  font-size: 1rem;
`

const Gallery = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 11px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #1E1E1E;
  border-radius: 5px;
`
const ImageBig = styled(Image)`
  grid-column: 1/5;
`

const Media = () => {
    return (
        <>
            <Flex justify='space-between'>
                <Title>Media</Title>
                <KeyboardArrowRight />
            </Flex>
            <Gallery>
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <Image src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
                <ImageBig src='https://www.asroad.org/wp-content/uploads/2021/01/s1200.jpeg' />
            </Gallery>
        </>
    );
};

export default Media;