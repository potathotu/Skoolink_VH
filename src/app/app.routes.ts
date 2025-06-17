import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { NewPassword } from './pages/auth/new-password/new-password';

export const routes: Routes = [
    {
        path: "login",
        component: Login,
    },

    {
        path:"new-password",
        component: NewPassword,
    }
];