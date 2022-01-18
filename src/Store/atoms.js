import { atom } from 'recoil';

export const username = atom({
    key: 'username',
    default: '',
});

export const password = atom({
    key: 'password',
    default: '',
});

export const userData = atom({
    key: 'userData',
    default: {},
});
