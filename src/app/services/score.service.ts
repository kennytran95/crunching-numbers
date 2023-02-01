import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fullFormData } from '../models/fullFormData';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  private base_url: string = 'http://localhost:5236';

  private scoreData = {};

  public getScore() {
    return this.scoreData;
  }

  public postScore(score: any): Observable<string[]> {
    return this.http.post<string[]>(`${this.base_url}/api/Score`, score);
  }

  public setScoreData(result: fullFormData): void {
    this.scoreData = result;
  }
}
