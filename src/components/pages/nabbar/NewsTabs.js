import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const NewsTabs = () => {
    const [value, setValue] = React.useState(0);

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
                <Tab label="Home" />
                <Tab label="Travel" />
                <Tab label="Entertainment" />
                <Tab label="Food" />
                <Tab label="Tech" />
                <Tab label="Modeling" />
                <Tab label="Fasion" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
                <Tab label="Item Seven" />
            </Tabs>
        </Box>
    );
}

export default NewsTabs

