import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { faClipboard, faSave } from '@fortawesome/free-solid-svg-icons';
import { MediaApiService, DownloadApiService } from '@frontend/data';
import { TableDialogHdlComponent } from './table-dialog-hdl.component';

@Component({
  selector: 'frontend-discovery-files-table',
  template: `
  <section class="mat-elevation-z1">
    <table mat-table [dataSource]="dataSource" matSort aria-label="File list">
      <ng-container matColumnDef="index">
        <th mat-header-cell *matHeaderCellDef>No.</th>
        <td mat-cell *matCellDef="let i = index">
          <mat-chip> {{ i + 1 }} </mat-chip>
        </td>
      </ng-container>

      <ng-container matColumnDef="icon">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Icon</th>
        <td mat-cell *matCellDef="let element">
          <ui-discovery-icons [fileType]="element?.contentType" [iconSize]="'2x'"></ui-discovery-icons>
        </td>
      </ng-container>

      <ng-container matColumnDef="filename">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>filename</th>
        <td mat-cell *matCellDef="let element">
        <a mat-button (click)="resourceEmitter.emit(element)">
          {{ element?.getTitle() }}
        </a>
        </td>
      </ng-container>

      <ng-container matColumnDef="filetype">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>filetype</th>
        <td mat-cell *matCellDef="let element">
        {{ element?.getType()  | formatType }}
        </td>
      </ng-container>

      <ng-container matColumnDef="duration">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>duration</th>
        <td mat-cell *matCellDef="let element">{{ element?.Duration * 1000 | date:'H:mm:ss':'UTC' }}</td>
      </ng-container>

      <ng-container matColumnDef="player">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>player</th>
        <td mat-cell *matCellDef="let element">
          <frontend-table-dialog-mediafile [mediaFile]="element" [fileType]="element?.getType()"></frontend-table-dialog-mediafile>
        </td>
      </ng-container>

      <ng-container matColumnDef="hdl">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>hdl</th>
        <td mat-cell *matCellDef="let element">
          <button mat-button (click)="openHDL(element)">
            <fa-icon [icon]="faClipboard" [size]="'2x'"></fa-icon>
          </button>
        </td>
      </ng-container>

      <ng-container matColumnDef="download">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>download</th>
        <td mat-cell *matCellDef="let element">
        <button mat-button (click)="download(element.id)" download>
          <a mat-button [href]="downloadUrl" download>
            <fa-icon [icon]="faSave" [size]="'2x'"></fa-icon>
          </a>
        </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns; let i = index"></tr>
    </table>

    <!-- mat-paginator #paginator [length]="dataSource.data.length" [pageIndex]="0" [pageSize]="5"
      [pageSizeOptions]="[5, 10, 50, 100]" showFirstLastButtons>
    </mat-paginator -->
  </section>
  `,
  styles: [`
  table {
    width: 80%;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoveryFilesTableComponent {

  private _data;
  dataSource;
  downloadUrl: any;

  faClipboard = faClipboard;
  faSave = faSave;

  @Input()
  set data(data: any) {
    this._data = data;
    this.dataSource = new MatTableDataSource(this._data);
  }

  get data() {
    return this.dataSource;
  }

  @Output() resourceEmitter = new EventEmitter();

  displayedColumns = ['index', 'icon', 'filename', 'filetype', 'duration', 'player', 'hdl', 'download'];

  constructor(
    private dialog: MatDialog,
    private mediaSvc: MediaApiService,
    private downloadSvc: DownloadApiService
  ) { }

  src(id) {
    return this.mediaSvc.getMediafile(id);
  }

  openHDL(content) {
    this.dialog.open(TableDialogHdlComponent, {
      data: content
    })
  }

  download(id) {
    this.downloadUrl = this.downloadSvc.requestFile(id);
  }
}
