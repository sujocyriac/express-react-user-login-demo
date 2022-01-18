import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { username, password, userData } from 'Store/atoms';
import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_BASE_API_URL;

const useLogin = (state, setter) => {
    const userId = useRecoilValue(username);
    const userPassword = useRecoilValue(password);
    const [data, setData] = useRecoilState(userData);
    useEffect(() => {
        const fetchLogin = async () => {
            try {
                const basicAuthString = btoa(`${userId}:${userPassword}`);
                let config = {
                    url: `${apiBaseURL}login`,
                    method: 'get',
                    headers: {
                        Authorization: `Basic ${basicAuthString}`,
                    },
                };
                const { data = {} } = await axios(config);
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setter(false);
            }
        };

        if (state && axios && userId && userPassword) fetchLogin();
    }, [state, userId, userPassword, axios]);
    return data;
};
export default useLogin;
