import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { DocsRoutingModule } from './docs-routing.module';
import {
  ArchiveSetupComponent,
  DataUserAgreementComponent,
  DepositingPolicyComponent,
  DepositorAgreementComponent, 
  DepositorGuidelinesComponent, 
  FormatWhitelistComponent, 
  GuidesIndexComponent, 
  MissionStatementComponent, 
  PrivacyPolicyComponent, 
  SubmissionGuidelinesComponent, 
  TermsOfUseComponent, 
  UserGuideComponent
} from './index';

@NgModule({
  declarations: [
    UserGuideComponent,
    TermsOfUseComponent,
    MissionStatementComponent,
    DepositorAgreementComponent,
    DataUserAgreementComponent,
    DepositorGuidelinesComponent,
    SubmissionGuidelinesComponent,
    DepositingPolicyComponent,
    FormatWhitelistComponent,
    ArchiveSetupComponent,
    PrivacyPolicyComponent,
    GuidesIndexComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    UiMaterialDesignModule,
    FontAwesomeModule
  ]
})
export class FeatureDocsModule { }
