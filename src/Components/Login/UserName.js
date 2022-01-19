import React, { useState, useEffect } from 'react';
import TextInput from 'Components/Core/Input';
import styles from 'Components/Login/styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { username, submitToggle } from 'Store/atoms';

/**
 * Component to display username input and stores the username input value
 * into global state.
 */
const UserName = () => {
    const { inputs } = styles();
    const [value, setValue] = useRecoilState(username);
    const [error, setError] = useState(false);
    const toggle = useRecoilValue(submitToggle);

    useEffect(() => {
        if (toggle && !value) setError(true);
    }, [value, toggle]);

    return (
        <TextInput
            error={error}
            label="User Name"
            placeholder="Input your user name"
            className={inputs}
            value={value}
            helperText={error ? 'Required!' : ''}
            onChange={event => {
                setValue(event.target.value);
            }}
            onBlur={event => {
                setError(!event.target.value);
            }}
        />
    );
};

export default UserName;
