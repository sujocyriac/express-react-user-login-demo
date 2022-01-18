import React from 'react';
import TextInput from 'Components/Core/Input';
import styles from 'Components/Login/styles';
import { useRecoilState } from 'recoil';
import { username } from 'Store/atoms';

/**
 * Component to display username input and stores the username input value
 * into global state.
 */
const UserName = () => {
    const { inputs } =
        styles();
    const [value, setValue] =
        useRecoilState(
            username
        );
    return (
        <TextInput
            label="User Name"
            placeholder="Input your user name"
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

export default UserName;
