import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ui-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioComponent implements OnInit {

  @Input() audioSource;
  @Input() audioType;

  constructor() { }

  ngOnInit() {

  }

}
