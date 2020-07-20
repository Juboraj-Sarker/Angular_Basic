import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadFromApiComponent } from './read-from-api/read-from-api.component';
import { WriteToApiComponent } from './write-to-api/write-to-api.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: "read", component: ReadFromApiComponent},
  {path: "write", component: WriteToApiComponent},
  {path: "test", component: TestComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReadFromApiComponent, WriteToApiComponent, TestComponent, HomeComponent];
