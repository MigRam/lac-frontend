import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-about',
  template: `
  <h2 mat-dialog-title>
    The Language Archive Cologne (LAC)
  </h2>
  <mat-dialog-content>
    The archive is a research data repository for linguistics and all humanities
    disciplines that work with audiovisual data.
  </mat-dialog-content>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
