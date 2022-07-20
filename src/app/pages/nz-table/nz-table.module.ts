import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableRoutingModule } from './nz-table-routing.module';
import { NzTableComponent } from './nz-table.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [NzTableComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzTableRoutingModule,
  ]
})
export class NzTableModule { }
