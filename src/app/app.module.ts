import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserAppInterceptor } from './services/user-app.interceptor';
import {RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent, 
    ItemsComponent, 
    ItemDetailComponent,
    RegisterComponent
  ],

  providers: [
    UserService,
    UserStoreService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: UserAppInterceptor,
      multi: true,
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
