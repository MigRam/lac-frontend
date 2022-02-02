import { async, TestBed } from '@angular/core/testing';
import { FeatureDocsModule } from './feature-docs.module';

describe('FeatureDocsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureDocsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureDocsModule).toBeDefined();
  });
});
