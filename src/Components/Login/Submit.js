import React from 'react';
import Button from '@mui/material/Button';
import useLogin from 'Components/Login/Hooks/useLogin';
import { submitToggle } from 'Store/atoms';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

/**
 * Displays submit button on login popup
 */
const Submit = ({ toastErrorSetter }) => {
    const [, setToggle] = useRecoilState(submitToggle);
    const userId = useLogin();
    const navigate = useNavigate();

    if (userId) {
        document.body.className = '';
        navigate(`/user/${userId}`);
    }

    return (
        <Button size="small" variant="contained" onClick={() => setToggle(true)}>
            Submit
        </Button>
    );
};

export default Submit;
