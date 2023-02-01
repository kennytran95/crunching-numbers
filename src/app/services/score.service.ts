import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fullFormData } from '../models/fullFormData';
import { formResultData } from '../models/formResultData';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  private base_url: string = 'http://localhost:5236';

  private scoreData: fullFormData;

  public getScore() {
    return this.scoreData;
  }

  public postScore(score: formResultData): Observable<string[]> {
    return this.http.post<string[]>(`${this.base_url}/api/Score`, score);
  }

  public setScoreData(result: fullFormData): void {
    this.scoreData = result;
  }
}
