import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { username, password, submitToggle, hasError } from 'Store/atoms';
import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_BASE_API_URL;

const useLogin = () => {
    const [uid, setUid] = useState(null);
    const userId = useRecoilValue(username);
    const userPassword = useRecoilValue(password);
    const [toggle, setToggle] = useRecoilState(submitToggle);
    const [toastError, setToastError] = useRecoilState(hasError);

    useEffect(() => {
        const fetchLogin = async () => {
            try {
                const basicAuthString = btoa(`${userId}:${userPassword}`);
                let config = {
                    url: `${apiBaseURL}login`,
                    method: 'post',
                    headers: {
                        Authorization: `Basic ${basicAuthString}`,
                    },
                };
                const { data: { accessToken = '', userId: uid = '' } = {} } = await axios(config);
                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('userId', uid);
                setUid(uid);
            } catch (error) {
                setToastError(true);
            } finally {
                setToggle(false);
            }
        };

        if (toggle && axios && userId && userPassword) fetchLogin();
    }, [toggle, userId, userPassword, axios]);
    return uid;
};
export default useLogin;
