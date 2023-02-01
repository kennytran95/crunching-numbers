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
  // private subscription: Subscription;
  public scoreData$: Observable<fullFormData>;
  public selectedStyle: 'Default' | 'Simple' | 'Bordered' = 'Default';
  public viewOptions: string[] = ['Default', 'Simple', 'Bordered'];

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: number[] = [10, 15, 20];

  public ngOnInit(): void {
    document.body.style.backgroundColor = 'white';
    this.getScoreData();
  }

  //switched to using an async pipe to prevent memory leaks
  public getScoreData(): void {
    // this.subscription = this.scoreService
    //   .getScore()
    //   .subscribe((res) => (this.scoreData$ = res));
    this.scoreData$ = this.scoreService.getScore();
  }

  public handlePageChange(event: Number): void {
    this.page = Number(event);
  }

  public handleTableSizeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.tableSize = Number(input.value);
      this.page = 1;
    }
  }

  // public ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
