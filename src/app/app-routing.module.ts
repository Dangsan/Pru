import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoSearchComponent } from './no-search/no-search.component';
import { SearchComponent } from './search/search.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';


const routes: Routes = [{path:'nosearch', component:NoSearchComponent},
                        {path:'search',component:SearchComponent},
                        {path:'editclient',component:EditarClienteComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
