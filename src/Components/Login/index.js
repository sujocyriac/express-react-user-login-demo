import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Submit from 'Components/Login/Submit';
import styles from 'Components/Login/styles';
import UserName from 'Components/Login/UserName';
import Password from 'Components/Login/Password';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { useRecoilState } from 'recoil';
import { hasError } from 'Store/atoms';
import useIsLoggedIn from 'Components/Login/Hooks/useIsLoggedIn';
import { useNavigate } from 'react-router-dom';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

/**
 * Component to display the login box and user input fields
 */
const Login = () => {
    const [hasErrors, setHasError] = useRecoilState(hasError);
    const { root, inputsBox, submitButton } = styles();
    document.body.className = 'default-body';
    const isLoggedIn = useIsLoggedIn();
    const navigate = useNavigate();
    if (isLoggedIn) {
        const uid = sessionStorage.getItem('userId');
        navigate(`user/${uid}`, { replace: true });
    }
    return (
        !isLoggedIn && (
            <div>
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
                <Snackbar
                    open={hasErrors}
                    onClose={() => setHasError(false)}
                    TransitionComponent={TransitionUp}
                    key="TransitionUp"
                >
                    <Alert variant="filled" severity="error" sx={{ width: '100%' }} onClose={() => setHasError(false)}>
                        Incorrect Username or Password
                    </Alert>
                </Snackbar>
            </div>
        )
    );
};

export default Login;
