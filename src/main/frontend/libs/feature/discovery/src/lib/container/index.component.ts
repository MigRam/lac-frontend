import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent {
  
  info = 'Search for Collection, Bundles and more ...';
  constructor( ) { }

}
