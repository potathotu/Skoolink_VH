import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { RecoverPassword } from './pages/auth/recover-password/recover-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashBoard } from './pages/dashboard/dashboard';
import { Thematiques } from './pages/thematiques/thematiques';
import { Projets } from './pages/projets/projets';

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
        path: "",
        component: LayoutComponent,
        children:[
            {
                path:"dashboard",
                component: DashBoard,
            },

            {
                path:"thematiques",
                component: Thematiques,
            },
            
            {
                path:"projets",
                component: Projets
            }
        ]
    }
];