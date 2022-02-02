import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-impressum',
  template: `
  <section class="mat-typography" fxLayout="column" fxLayoutAlign="center" fxFlex="70" fxFlexOffset="15">
  <div fxLayoutAlign="center" fxFlexOffset="2">
    <h1 class="mat-header"> Impressum </h1>
  </div>
  <div fxLayoutGap="10px">

    <mat-card fxFlex="40%">
      <h2>Contact: Street Address</h2>
      <p>
        Language Archive Cologne Data Center for the Humanities,
        University of Cologne<br>
        Universitätsstraße 22<br>
        50923 Köln
      </p>
    </mat-card>

    <mat-card fxFlex="40%">
      <h2>Contact: Mailing Address</h2>
      <p>Language Archive Cologne
        Data Center for the Humanities, University of Cologne<br>
        Albertus-Magnus-Platz<br>
        50923 Köln</p>
    </mat-card>

    <mat-card fxFlex="40%">
      <h2>Archive Manager</h2>
      <p>
        Felix Rau M.A <br>
        Contact the archive manager:<br>
        <a href="mailto:lac-manager@uni-koeln.de" matTooltip="LAC-Manager">lac-manager[at]uni-koeln.de</a><br>
        Tel.: +49-221-470-7213
      </p>
    </mat-card>

  </div>
</section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImpressumComponent {
}
