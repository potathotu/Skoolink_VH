import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { RecoverPassword } from './pages/auth/recover-password/recover-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';

export const routes: Routes = [
    {
        path: "login",
        component: Login,
    },

    {
        path:"recover-password",
        component: RecoverPassword,
    },

    {
        path:"reset-password",
        component: ResetPassword,
    }
];