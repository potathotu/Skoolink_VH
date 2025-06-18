import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { NewPassword } from './pages/auth/new-password/new-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';

export const routes: Routes = [
    {
        path: "login",
        component: Login,
    },

    {
        path:"new-password",
        component: NewPassword,
    },

    {
        path:"reset-password",
        component: ResetPassword,
    }
];