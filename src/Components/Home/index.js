import React, { useState, useRef } from 'react';
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Box,
    Menu,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Grid,
} from '@mui/material';
import CakeRounded from '@mui/icons-material/CakeRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import styles from 'Components/Home/styles';
import { useParams } from 'react-router-dom';
import useCustomerData from 'Components/Home/Hooks/useCustomerData';
import { useNavigate } from 'react-router-dom';

/**
 * Displays home page after login
 */
const Home = () => {
    const navigate = useNavigate();
    let { userId = '' } = useParams();
    const { avatar, address, birthDay, email, name, phone, username } = useCustomerData(userId);
    const { usrBox = '', circle = '', card = '', text = '' } = styles();
    const [show, setShow] = useState(false);
    const menuReference = useRef(null);
    const handleMenuClose = () => {
        setShow(false);
    };
    document.body.className = '';
    return (
        <Container disableGutters maxWidth={false}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {name || 'Default User'}
                    </Typography>
                </Toolbar>
                <Box className={usrBox}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={event => {
                            setShow(true);
                        }}
                        color="inherit"
                        ref={menuReference}
                    >
                        <Avatar alt={name} src={avatar} />
                    </IconButton>
                    <Menu
                        anchorEl={menuReference.current}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={show}
                        onClose={handleMenuClose}
                    >
                        <MenuItem
                            onClick={() => {
                                setShow(false);
                                sessionStorage.clear();
                                navigate('/', { replace: true });
                            }}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </AppBar>
            <Container maxWidth="lg">
                <Card className={card}>
                    <CardHeader title={`${name} (${username})`} subheader={`${address}`} className={text} />
                    <CardContent>
                        <Avatar alt={name} src={avatar} sx={{ mx: 'auto', width: 180, height: 180 }} />
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={2} sx={{ mx: 'auto' }}>
                            <Grid item xs={1}>
                                <CakeRounded />
                            </Grid>
                            <Grid item xs={4}>
                                {birthDay}
                            </Grid>
                            <Grid item xs={1}>
                                {<PhoneAndroidRoundedIcon />}
                            </Grid>
                            <Grid item xs={4}>
                                {phone}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mx: 'auto' }}>
                            <Grid item xs={1}>
                                <EmailRoundedIcon />
                            </Grid>

                            <Grid item xs={4}>
                                {email}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" className={text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Container>
    );
};

export default Home;
