import styled, {css} from "styled-components";
import {Badge} from "@mui/material";
import React, {useEffect, useState} from "react";



interface StyledBadgeProps {
    bg?: string,
}

const StyledBadge = styled(Badge)<StyledBadgeProps>(( props ) => ({
    '& .MuiBadge-badge': {
        color: '#44b700',
        backgroundColor: props.bg || '#ffffff',
        border: '2px solid black',
        borderColor: props.theme.colors.borderColor,
        height: '16px',
        width: '16px',
        borderRadius: '10px'
    },

}));

// '#53E04E' | '#F0971D' | '#F0F0F0'
interface MyBadgeProps {
    bg?: 'green' | 'orange' | 'white',
    children?: React.ReactNode
}

function MyBadge (props:MyBadgeProps) {

    const [color,setColor] = useState<string>()

    useEffect(() => {
        if (props.bg == 'green') {
            setColor('#53E04E')
        } else if (props.bg == 'orange') {
            setColor('#F0971D')
        } else {
            setColor('#F0F0F0')
        }
    }, [])

    return (
    <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        bg={color}
    >
        {props.children}
    </StyledBadge>
    )}


export default MyBadge
