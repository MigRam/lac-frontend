import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MediaApiService } from '@frontend/data';

@Component({
  selector: 'frontend-table-dialog',
  template: `
  <h1 mat-dialog-title>
    {{ data.getTitle() }}
  </h1>
  <div mat-dialog-content>
      <div *ngIf="data.getType().startsWith('video')">
        <ui-video [videoSource]="src(data.id)" [videoType]="data.getType()"></ui-video>
      </div>
      <div *ngIf="data.getType().startsWith('audio')">
        <ui-audio [audioSource]="src(data.getId())" [audioType]="data.getType()"></ui-audio>
      </div>
      <div *ngIf="data.getType().startsWith('image')">
        <ui-picture [imageSource]="src(data.id)"></ui-picture>
      </div>
      <div *ngIf="data.getType().endsWith('pdf')">
        <ui-pdf [pdfSource]="src(data.id)"></ui-pdf>
      </div>
      <div *ngIf="data.getType().startsWith('text')">
        <iframe [src]="src(data.id)" style="border: none"></iframe>
      </div>
    </div>
    <div mat-dialog-actions>
  </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private mediaSvc: MediaApiService
  ) { }

  src(id) {
    return this.mediaSvc.getMediafile(id);
  }

}
