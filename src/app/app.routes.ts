import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { RecoverPassword } from './pages/auth/recover-password/recover-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { DashBoard } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {   
        path: "",
        pathMatch: "full",
        redirectTo: "login"
    },

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
    },

    {
        path:"dashboard",
        component: DashBoard,
    }
];