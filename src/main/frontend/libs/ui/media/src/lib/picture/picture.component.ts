import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent {

  @Input() imageSource;

  constructor() { }

}
