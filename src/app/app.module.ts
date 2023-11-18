import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeModule } from './modules/home/home.module';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    HoverDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
