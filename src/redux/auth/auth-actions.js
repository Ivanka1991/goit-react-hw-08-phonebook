import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSucsses = createAction('auth/registerSucsses');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSucsses = createAction('auth/loginSucsses');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSucsses = createAction('auth/logoutSucsses');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSucsses = createAction('auth/getCurrentUserSucsses');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
