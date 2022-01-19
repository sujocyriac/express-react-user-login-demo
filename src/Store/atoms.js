import { atom } from 'recoil';

export const username = atom({
    key: 'username',
    default: '',
});

export const password = atom({
    key: 'password',
    default: '',
});

export const submitToggle = atom({
    key: 'submitToggle',
    default: false,
});

export const hasError = atom({
    key: 'hasError',
    default: false,
});
