import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const genRanHex = () => [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const MySvg = styled.svg`
  position: absolute;
  top: -1.5px;
  right: -1px;
`

const Ring = () => {
    const [color1, setColor1] = useState<string>()
    const [color2, setColor2] = useState<string>()

    useEffect(() => {
        setColor1('#' + genRanHex())
        setColor2('#' + genRanHex())
    }, [])

    return (
        <MySvg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="43" height="43" rx="21.5" stroke="url(#paint0_linear_72_369)" strokeWidth="2"/>
            <defs>
                <linearGradient id="paint0_linear_72_369" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stopColor={color1}/>
                    <stop offset="1" stopColor={color2}/>
                </linearGradient>
            </defs>
        </MySvg>

    );
};

export default Ring;