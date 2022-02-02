import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { faEye, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faFileAlt, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { TableDialogComponent } from './table-dialog.component';

@Component({
  selector: 'frontend-table-dialog-mediafile',
  template: `
  <div *ngIf="isVideo(fileType)">
    <button mat-button (click)="openDialog()">
      <fa-icon [icon]="faPlay" [size]="faSize"></fa-icon>
    </button>
  </div>

  <div *ngIf="isAudio(fileType)">
    <button mat-button (click)="openDialog()">
      <fa-icon [icon]="faHeadphones" [size]="faSize"></fa-icon>
    </button>
  </div>

  <div *ngIf="isText(fileType) ||isXML(fileType)">
    <button mat-button (click)="openDialog()">
      <fa-icon [icon]="faEye" [size]="faSize"></fa-icon>
    </button>
  </div>

  <div *ngIf="isPDF(fileType)">
    <button mat-button (click)="openDialog()">
      <fa-icon [icon]="faEye" [size]="faSize"></fa-icon>
    </button>
  </div>

  <div *ngIf="isImage(fileType)">
    <button mat-button (click)="openDialog()">
      <fa-icon [icon]="faEye" [size]="faSize"></fa-icon>
    </button>
  </div>

  <div *ngIf="fileType == undefined">
    <button mat-button>
      <fa-icon [icon]="faFile" [size]="faSize"></fa-icon>
    </button>
</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDialogMediafileComponent {

  private _mediaFile;
  private _fileType;

  @Input()
  set mediaFile(file) {
    this._mediaFile = file;
  };

  get mediaFile() {
    return this._mediaFile;
  }

  @Input()
  set fileType(type) {
    this._fileType = type;
  }

  get fileType() {
    return this._fileType;
  }

  faHeadphones = faHeadphonesAlt;
  faPlay = faPlayCircle;
  faEye = faEye;
  faFile = faFileAlt;
  faSize = "2x";

  constructor(
    private _dialog: MatDialog
  ) {

  }

  openDialog() {
    this._dialog.open(TableDialogComponent, {
      data: this.mediaFile
    })
  }

  isAudio(type) {
    return type.includes('audio');
  }

  isVideo(type) {
    return type.includes('video');
  }

  isPDF(type) {
    return type.includes('pdf');
  }

  isText(type) {
    return type.startsWith('text');
  }

  isXML(type) {
    return type.endsWith('eaf+xml');
  }

  isAnnotation(type) {
    return type.includes('eaf');
  }

  isImage(type) {
    return type.includes('image');
  }

  isMultipart(type) {
    return type.includes('multipart');
  }

}
