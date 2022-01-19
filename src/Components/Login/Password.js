import React, { useState, useEffect } from 'react';
import TextInput from 'Components/Core/Input';
import { useRecoilState, useRecoilValue } from 'recoil';
import { password, submitToggle } from 'Store/atoms';
import styles from 'Components/Login/styles';

/**
 * Component to display username input and stores the username input value sdsds sd sd sd ds d sd
 * into global state.
 */
const Password = () => {
    const { inputs } = styles();
    const [value, setValue] = useRecoilState(password);
    const [error, setError] = useState(false);
    const toggle = useRecoilValue(submitToggle);

    useEffect(() => {
        if (toggle && !value) setError(true);
    }, [value, toggle]);

    return (
        <TextInput
            error={error}
            label="Password"
            type="password"
            placeholder="Input your password"
            className={inputs}
            helperText={error ? 'Required!' : ''}
            value={value}
            onChange={event => {
                setValue(event.target.value);
            }}
            onBlur={event => {
                setError(!event.target.value);
            }}
        />
    );
};

export default Password;
