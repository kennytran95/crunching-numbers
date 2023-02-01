import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formResultData } from '../../models/formResultData';
import { ScoreService } from 'src/app/services/score.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css'],
})
export class ScoreFormComponent {
  constructor(private scoreService: ScoreService, private router: Router) {}
  private subscription: Subscription;

  public uploadedMessage: string = '';

  public handleUploadMessage(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      //needed for type checking element.target.files
      const input = event.target;
      if (input.files) {
        //to check for null values
        const fileData: File = input.files[0];
        const reader: FileReader = new FileReader();
        reader.onload = (): void => {
          const text: string = reader.result as string;
          this.uploadedMessage = text;
        };
        reader.readAsText(fileData);
      }
    }
  }

  public submitForm(formData: NgForm): void {
    this.subscription = this.scoreService
      .postScore(formData.form.value)
      .subscribe((medicalData) => {
        const resultsWithMessage = {
          calculatedResults: medicalData,
          message: this.uploadedMessage,
        };

        this.scoreService.setScoreData(resultsWithMessage);
        this.router.navigate(['/scoreResults']);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
