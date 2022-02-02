import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

enum Services {
  AT = "AUDIO_TRANSKRIPTION",
  DS = "DOCUMENTS_SEGMENTATION",
  DSK = "KRAKEN_DOCUMENTS_SEGMENTATION"
}

@Component({
  selector: 'lac-jobs-form',
  templateUrl: './jobs-form.component.html',
  styles: [`

    .mat-card {
      width: 50vw;
    }

    .full-width {
      width: 100%;
    }
    
    .service-card {
      min-width: 120px;
      margin: 20px auto;
    }
    
    .mat-radio-button {
      display: block;
      margin: 5px 0;
    }
    
    .row {
      display: flex;
      flex-direction: row;
      max-width: 450px;
    }
    
    .col {
      flex: 1;
      margin-right: 20px;
    }
    
    .col:last-child {
      margin-right: 0;
    }
    
  `]
})
export class JobsFormComponent {

  serviceForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    path: [null],
  });

  hasJobNumber = false;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar) { }

  onSubmit() {
    this.snackbar.open('job data was send!');
  }

  sentOrder() {
    // this.http.post(`${this.SERVICES_ENDPOINT}/job/createJob`)
  }

  getAllAudios() {

  }

}
