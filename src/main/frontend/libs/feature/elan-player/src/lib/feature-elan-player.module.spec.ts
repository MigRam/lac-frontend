import { async, TestBed } from '@angular/core/testing';
import { FeatureElanPlayerModule } from './feature-elan-player.module';

describe('FeatureElanPlayerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureElanPlayerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureElanPlayerModule).toBeDefined();
  });
});
