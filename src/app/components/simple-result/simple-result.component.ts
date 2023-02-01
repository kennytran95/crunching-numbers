import { Component } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { fullFormData } from 'src/app/models/fullFormData';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-result',
  templateUrl: './simple-result.component.html',
  styleUrls: ['./simple-result.component.css'],
})
export class SimpleResultComponent {
  constructor(private scoreService: ScoreService) {}
  private subscription: Subscription;
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
    this.subscription = this.scoreService
      .getScore()
      .subscribe((res) => (this.scoreData = res));
  }

  public handlePageChange(event: Number): void {
    this.page = Number(event);
  }

  public handleTableSizeChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.tableSize = parseInt(event.target.value);
      this.page = 1;
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
