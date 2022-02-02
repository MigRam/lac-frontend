import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
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
} from './index';

const routes: Routes = [
  {
    path: '', component: GuidesIndexComponent, children: [
      { path: '', component: UserGuideComponent },
      { path: 'terms-of-use', component: TermsOfUseComponent },
      { path: 'mission-statement', component: MissionStatementComponent },
      { path: 'depositor-agreement', component: DepositorAgreementComponent },
      { path: 'data-user-agreement', component: DataUserAgreementComponent },
      { path: 'depositor-guidelines', component: DepositorGuidelinesComponent },
      { path: 'submission-guidelines', component: SubmissionGuidelinesComponent },
      { path: 'depositing-policy', component: DepositingPolicyComponent },
      { path: 'format-whitelist', component: FormatWhitelistComponent },
      { path: 'archive-setup', component: ArchiveSetupComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
