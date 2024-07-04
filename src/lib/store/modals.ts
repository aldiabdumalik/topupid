import { atom } from 'recoil';

const modalLogin = atom({
  key: 'modalLogin',
  default: false,
});

export { modalLogin };
