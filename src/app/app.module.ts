import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RoutingModule } from './app-routing.modul';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderMobileComponent, SearchPageComponent],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}