import { NgModule } from '@angular/core';
import { LayoutModule } from "@angular/cdk/layout";
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    LayoutModule,
    MatTooltipModule,
    MatDialogModule,
    ScrollingModule,
    MatChipsModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    LayoutModule,
    MatTooltipModule,
    MatDialogModule,
    ScrollingModule,
    MatChipsModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }]
})
export class UiMaterialDesignModule { }
