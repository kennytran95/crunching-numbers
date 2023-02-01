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

  ngOnInit() {
    document.body.style.backgroundColor = 'white';
  }

  private subscription: Subscription;

  public uploadedMessage: string = '';

  //custon error handling
  public sampleMaxCountError: boolean = false;
  public patientError: boolean = false;
  public doctorError: boolean = false;
  public fileError: boolean = false;

  public handleUploadMessage(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      //needed for type checking element.target.files
      const input = event.target;
      if (input.files) {
        //to check for null values
        const fileData: File = input.files[0];
        if (this.validateFileUpload(fileData)) return;
        const reader: FileReader = new FileReader();
        reader.onload = (): void => {
          const text: string = reader.result as string;
          this.uploadedMessage = text;
        };
        reader.readAsText(fileData);
      }
    }
  }

  public validateFileUpload(file: File): boolean {
    if (file.type !== 'text/plain') {
      this.fileError = true;
      return true;
    } else {
      this.fileError = false;
      return false;
    }
  }

  public submitForm(formData: NgForm): void {
    if (formData.invalid) {
      //detect error
      this.validateNumbers(formData);
      return;
    }
    this.validateNumbers(formData);
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

  public validateNumbers(formData: NgForm) {
    if (
      //custom error-validation b/c Angular has weird validation mechanisms with input type=number
      formData.form.value.sampleMaxCount < 0 ||
      isNaN(formData.form.value.sampleMaxCount)
    ) {
      this.sampleMaxCountError = true;
    } else {
      this.sampleMaxCountError = false;
    }

    if (formData.form.value.patient < 0 || isNaN(formData.form.value.patient)) {
      this.patientError = true;
    } else {
      this.patientError = false;
    }

    if (formData.form.value.doctor < 0 || isNaN(formData.form.value.doctor)) {
      this.doctorError = true;
    } else {
      this.doctorError = false;
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
