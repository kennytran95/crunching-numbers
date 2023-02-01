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

  public scoreData: fullFormData;
  public selectedStyle: 'Default' | 'Simple' | 'Bordered' = 'Default';

  viewOptions = ['Default', 'Simple', 'Bordered'];

  ngOnInit() {
    this.scoreData = this.scoreService.getScore();
  }
}
