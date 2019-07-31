import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppInitService } from './service/app-init.service';
import { metaReducers, reducers } from './store/reducers';

import { AuthModule } from './auth/auth.module';

export function initApp(appInitService: AppInitService) {
  return () => appInitService.initApp();
}

@NgModule({
  declarations: [
    AppComponent,
    NoAccessComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name: 'NgRx Demo'}),
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
