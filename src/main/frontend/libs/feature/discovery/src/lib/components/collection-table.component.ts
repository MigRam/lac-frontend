import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'frontend-collection-table',
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

    <ng-container matColumnDef="bundlename">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Bundlename</th>
      <td mat-cell *matCellDef="let element">
        <a mat-button (click)="bundleEmitter.emit(element)">
          {{ element?.getTitle() }}
        </a>
      </td>
    </ng-container>

    <ng-container matColumnDef="bundleFiles">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Bundle Files</th>
      <td mat-cell *matCellDef="let element">
        <mat-list *ngFor="let item of element?.FileParentOf">
          <mat-list-item>
            <a mat-button [innerHTML]="item"></a>
          </mat-list-item>
        </mat-list>
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
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionTableComponent implements OnInit {

  dataSource;

  @Input()
  set data(data: any) {
    this.dataSource = new MatTableDataSource(data);
  }

  get data() {
    return this.dataSource;
  }

  @Output() bundleEmitter = new EventEmitter();
  
  displayedColumns = ['index', 'icon', 'bundlename', 'bundleFiles'];

  constructor() { }
  ngOnInit() { }

}
