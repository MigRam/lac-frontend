import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatTypePipe, HighlightPipe } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [ HighlightPipe, FormatTypePipe ],
  exports: [HighlightPipe, FormatTypePipe]
})
export class UiPipesModule {}
