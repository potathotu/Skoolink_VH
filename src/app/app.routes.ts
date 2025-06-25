import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { RecoverPassword } from './pages/auth/recover-password/recover-password';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { DashBoard } from './pages/dashboard/dashboard';
import { Messagerie } from './pages/messagerie/messagerie';
import { Projets } from './pages/projets/projets';
import { Thematiques } from './pages/thematiques/thematiques';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  
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
          },

          {
              path:"messagerie",
              component: Messagerie
          }
      ]
  }
];
