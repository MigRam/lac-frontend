import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { AudioComponent } from './audio/audio.component';
import { PdfComponent } from './pdf/pdf.component';
import { PictureComponent } from './picture/picture.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    CommonModule,
    UiMaterialDesignModule
  ],
  declarations: [PictureComponent, VideoComponent, AudioComponent, PdfComponent],
  exports: [PictureComponent, VideoComponent, AudioComponent, PdfComponent]
})
export class UiMediaModule {}
