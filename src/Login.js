import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '450px',
        margin: '0 auto',
        marginTop: '80px',
    },
});

/**
 * Component to display the login box and user input fields
 */
const Login = () => {
    const { root } = useStyles();
    return (
        <Card className={root} alignitems="center">
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Login;
