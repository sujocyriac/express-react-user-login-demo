import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useRecoilValue } from 'recoil';
import useLogin from 'Components/Login/useLogin';
import { username, password } from 'Store/atoms';

const Submit = () => {
    const [state, setState] = useState(false);
    useLogin(state, setState);
    return (
        <Button size="small" variant="contained" onClick={() => setState(true)}>
            Submit
        </Button>
    );
};

export default Submit;
