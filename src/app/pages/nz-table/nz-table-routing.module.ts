import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzTableComponent } from './nz-table.component';

const routes: Routes = [
  { path: '', component: NzTableComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NzTableRoutingModule { }
