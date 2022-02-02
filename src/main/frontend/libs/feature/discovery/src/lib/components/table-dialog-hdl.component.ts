import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frontend-table-dialog-hdl',
  template: `
  <h1 mat-dialog-title>
    {{ data.getTitle() }}
  </h1>
  <div mat-dialog-content>
    <mat-hint> Please use the following Handle PID to bookmark or reference this resource: </mat-hint>
    <mat-list>
      <mat-list-item>
        <mat-hint>Handle URI:</mat-hint>
        <a mat-button  href="{{data.getId()}}" title="click to bookmark {{data.getTitle()}}" target="_self">
          {{ data.getId() }}
        </a>
        <fa-icon [icon]="faClipboard" [size]="'2x'" (click)="copyToClipboard(data.id)"></fa-icon>
      </mat-list-item>
      <mat-list-item>
        <mat-hint>Handle URL:</mat-hint>
        <a mat-button  href="https://hdl.handle.net/{{data.getId()}}" title="click to bookmark {{data.getTitle()}}" target="_blank">
          https://hdl.handle.net/{{ data.getId() }}
        </a>
        <fa-icon [icon]="faClipboard" [size]="'2x'" (click)="copyToClipboard('https://hdl.handle.net/'+data.getId())"></fa-icon>
      </mat-list-item>
    </mat-list>
  </div>
  `,
  styles: [`
  fa-icon {
    cursor: pointer;
  }
  div > * {
    font-family: 'Roboto', sans serif;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDialogHdlComponent {
  faClipboard = faClipboard;
  faCheck = faCheckCircle;
  copySucessfully: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private snackBar: MatSnackBar
  ) { }

  copyToClipboard(hdl) {
    // console.log(hdl);
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (hdl));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.copySucessfully = true

    this.snackBar.open('Successfully copied!', '', {
      duration: 2000,
    });
  }
}
