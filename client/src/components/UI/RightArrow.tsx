import React from 'react';
import {useTheme} from "styled-components";

const RightArrow = () => {
    const theme = useTheme()
    return (
        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={theme.colors.fg} fill-rule="evenodd" clip-rule="evenodd" d="M7.32915 6.80002C7.55695 7.04854 7.55695 7.45146 7.32915 7.69998L1.49581 14.0636C1.26801 14.3121 0.898661 14.3121 0.670855 14.0636C0.443049 13.8151 0.443049 13.4122 0.670855 13.1637L6.09171 7.25L0.670855 1.33634C0.443048 1.08782 0.443048 0.684902 0.670855 0.436386C0.89866 0.187871 1.26801 0.187871 1.49581 0.436386L7.32915 6.80002Z"/>
        </svg>

    );
};

export default RightArrow;