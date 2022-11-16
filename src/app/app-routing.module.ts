import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'menu',
    component:MenuComponent
  }
  ,
  {
    path:'contact',
    component:ContactComponent
  }
  ,
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'menuPage/:id',
    component:MenuPageComponent
  },
  {
    path:'confirmOrder',
    component:ConfirmOrderComponent,
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
