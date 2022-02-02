import { Component, OnInit } from '@angular/core';

@Component( {
  template: `
      <section>
        <h1 class="mat-h1">{{userGuideData.title}}</h1>
        <h2 class="mat-h2">{{userGuideData.subtitles[0]}}</h2>
        <p>
        Welcome to the repository website of the
        <a href="http://dch.phil-fak.uni-koeln.de/"  matTooltip="Data Center for the Humanities (DCH)" aria-label="Data Center for the Humanities (DCH)" target="_blank">
        Data Center for the Humanities (DCH)</a> CLARIN Centre.

        The mission of CLARIN is to provide as wide access as possible to language research tools and materials around
        Europe. To achieve this goal, we set out some ground rules through this
        <a [routerLink]="['/docs/terms-of-use']"  matTooltip="Terms of Service">Terms of Service</a>.
        By accessing or using any kind of data or services provided by the LAC Repository, you agree to abide by the
        Terms contained in the above mentioned document.
        </p>

        <h2 class="mat-h2">{{userGuideData.subtitles[1]}}</h2>
        <p>
        Under the German legislation on Data Protection the repository of the LAC-CLARIN Centre has a legal duty to
        protect any information it collects from users. The LAC Repository privacy policy relates to personal data collected by the LAC
        Repository in the course of registration for access to services and during user consultations.
        Please read our <a [routerLink]="['/docs/privacy-policy']"  matTooltip="Privacy Policy" aria-label="Privacy Policy">Privacy Policy</a>
        in order to learn how we manage this issue and how it affects you. For a detailed list of the personal data collected please consult this table.
        </p>

        <h2 class="mat-h2">{{userGuideData.subtitles[2]}}</h2>
        <p>
        With the Depositor Agreement the depositor agrees to make new CLARIN Material available through the CLARIN
        Infrastructure, and defines access conditions. The <a [routerLink]="['/docs/depositing-policy']"  matTooltip="LAC Respository Depositing Policy"
            aria-label="LAC Respository Depositing Policy">LAC Respository Depositing Policy
        </a> details the specific policies for depositing corpora of audiovisual speech data.
        </p>

        <h2 class="mat-h2">{{userGuideData.subtitles[3]}}</h2>
        <p>
        Data access is available for the research user under the terms of the <a [routerLink]="['/docs/data-user-agreement']"  matTooltip="Data User Agreement">Data User Agreement</a>.
        Licensing and other terms between User and Content Provider and/or CLARIN will be agreed separately.
        If you have any questions about the Language Archive Cologne (LAC), feel free to contact <a href="mailto:lac-manager@uni-koeln.de" matTooltip="LAC-Manager">us</a>.
        </p>
    </section>
  `
} )
export class UserGuideComponent implements OnInit {

  userGuideData: any;

  constructor ( ) { }

  ngOnInit() {

    this.userGuideData = {
      title: 'Welcome to the Language Archive Cologne (LAC)',
      subtitles: [
        'Terms of Service',
        'Privacy Policy',
        'Data Deposit',
        'Data Access'
      ]
    };
  }

}
