import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { HomeComponent } from './home.component';

registerLocaleData(pt);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
})
export class HomeModule { }
