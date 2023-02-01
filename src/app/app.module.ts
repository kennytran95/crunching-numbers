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
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    ErrorComponent,
    HeaderComponent,
    SimpleResultComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
