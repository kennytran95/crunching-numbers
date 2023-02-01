import { Component } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { fullFormData } from 'src/app/models/fullFormData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-result',
  templateUrl: './simple-result.component.html',
  styleUrls: ['./simple-result.component.css'],
})
export class SimpleResultComponent {
  constructor(private scoreService: ScoreService) {}

  public scoreData$: any;

  public selectedStyle: 'default' | 'simple' | 'bordered' = 'default';

  viewOptions = ['default', 'simple', 'bordered'];

  changeView(): void {
    console.log(this.selectedStyle);
  }

  ngOnInit() {
    this.scoreData$ = this.scoreService.getScore();
  }

  public scoreData: fullFormData;
}
