import React from 'react';
import Container from '@mui/material/Container';
import Login from 'Components/Login';
import Home from 'Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './Styles/main.scss';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Container>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="user/:userId" element={<Home />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
