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
  public viewOptions: string[] = ['Default', 'Simple', 'Bordered'];

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: number[] = [5, 10, 15, 20];

  public ngOnInit(): void {
    document.body.style.backgroundColor = 'white';
    this.getScoreData();
  }

  public getScoreData(): void {
    this.scoreData = this.scoreService.getScore();
  }

  public handlePageChange(event: any): void {
    this.page = event;
  }

  public handleTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
