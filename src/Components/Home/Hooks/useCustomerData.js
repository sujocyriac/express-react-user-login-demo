import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiBaseURL = process.env.REACT_APP_BASE_API_URL;
const appBaseURL = process.env.REACT_APP_BASE_APP_URL;

const useCustomerData = uid => {
    const navigate = useNavigate();
    const [customerDetail, setCustomerDetails] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let config = {
                    url: `${apiBaseURL}user/${uid}`,
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                    },
                };
                const { data: [items] = {} } = await axios(config);
                setCustomerDetails(items);
            } catch (error) {
                console.log(error);
                document.body.className = 'default-body';
                navigate(`/`, { replace: true });
            }
        };

        if (axios && uid) fetchUser();
    }, [uid, axios]);
    return customerDetail;
};
export default useCustomerData;
