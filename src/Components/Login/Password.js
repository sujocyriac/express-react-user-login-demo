import React from 'react';
import TextInput from 'Components/Core/Input';
import { useRecoilState } from 'recoil';
import { password } from 'Store/atoms';
import styles from 'Components/Login/styles';

/**
 * Component to display username input and stores the username input value sdsds sd sd sd ds d sd
 * into global state.
 */
const Password = () => {
    const { inputs } =
        styles();
    const [value, setValue] =
        useRecoilState(
            password
        );
    return (
        <TextInput
            label="Password"
            type="password"
            placeholder="Input your password"
            className={inputs}
            value={value}
            onChange={event => {
                setValue(
                    event
                        .target
                        .value
                );
            }}
        />
    );
};

export default Password;
