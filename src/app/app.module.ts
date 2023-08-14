import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './components/board/score/score.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/board/card/card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImageService } from './services/image/image.service';
import { LocalService } from './services/local/local.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    BoardComponent,
    CardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ImageService, LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
