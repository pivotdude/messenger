import React from 'react';
import MessageIcon from "@mui/icons-material/Message";
import {Box, IconButton} from "@mui/material";

const Navigation = () => {
    return (
        <Box sx={{width: 80, height: '100vh'}}>
            <IconButton>
                <MessageIcon />
            </IconButton>
        </Box>
    );
};

export default Navigation;