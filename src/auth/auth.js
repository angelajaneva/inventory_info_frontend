// TODO Implement
import { toastr } from 'react-redux-toastr';

const USER = 'user';
const AUTH_TOKEN = 'auth_token';
const ROLE_ADMIN = "ROLE_ADMIN";


export function currentUser() {
  return JSON.parse(localStorage.getItem('userAuth'));
}

export function isAuth() {
  return localStorage.getItem('isAuth');
}

export function isAdmin() {
  return localStorage.getItem('isAuth') && localStorage.getItem('role') === ROLE_ADMIN;
}

export function login(token = {}, user) {

  localStorage.setItem(USER, user);
  localStorage.setItem('userAuth', token);
  localStorage.setItem('isAuth', true);

  toastr.success('InventoryInfo!', 'Welcome to InventoryInfo!');
  return true;
}

export function setRemember(user = {}) {
  localStorage.setItem('userRemember', JSON.stringify(user));
  return true;
}

export function removeRemember() {
  localStorage.removeItem('userRemember');
  return true;
}

export function logout() {

  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER);

  localStorage.removeItem('userAuth');
  localStorage.removeItem('isAuth');
  return true;
}
