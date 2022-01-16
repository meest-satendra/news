import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';

const NewsTabs = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper' }} style={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto">
                <Tab onClick={() => navigate('/')} label="Home" style={{textDecoration: 'none'}}/>
                <Tab label="Travel" />
                <Tab label="Entertainment" />
                <Tab label="Food" />
                <Tab label="Tech" />
                <Tab label="Modeling" />
                <Tab label="Fasion" />
            </Tabs>
        </Box>
    );
}

export default NewsTabs

