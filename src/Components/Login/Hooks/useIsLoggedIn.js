import { useEffect, useState } from 'react';
import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_BASE_API_URL;

const useIsLoggedIn = () => {
    const [state, setState] = useState(false);
    const token = sessionStorage.getItem('accessToken');
    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                let config = {
                    url: `${apiBaseURL}isLoggedIn`,
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const { data: { login } = {} } = await axios(config);
                setState(login);
            } catch (error) {
                console.log(error);
                setState(false);
            }
        };

        if (axios && token) isLoggedIn();
    }, [token, axios]);
    return state;
};
export default useIsLoggedIn;
