import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { LogiComponent } from './logi/logi.component';


const routes: Routes = [
  {
    path: '',
    component: CardlistComponent,
  },
 
  { path: 'login', component: LogiComponent },
  
  {
    path: 'product/:id',
    component: CarddetailsComponent ,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
