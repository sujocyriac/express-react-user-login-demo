import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Submit from 'Components/Login/Submit';
import styles from 'Components/Login/styles';
import UserName from 'Components/Login/UserName';
import Password from 'Components/Login/Password';

/**
 * Component to display the login box and user input fields
 */
const Login = () => {
    const { root, inputsBox, submitButton } = styles();
    return (
        <Card className={root} alignitems="center">
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <div className={inputsBox}>
                    <UserName />
                    <Password />
                </div>
            </CardContent>
            <CardActions className={submitButton}>
                <Submit />
            </CardActions>
        </Card>
    );
};

export default Login;
