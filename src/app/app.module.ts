import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreFormComponent } from './components/score-form/score-form.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { SimpleResultComponent } from './components/simple-result/simple-result.component';
import { ScoreService } from './services/score.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    ErrorComponent,
    HeaderComponent,
    SimpleResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
