import { async, TestBed } from '@angular/core/testing';
import { UiMediaModule } from './ui-media.module';

describe('UiMediaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiMediaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiMediaModule).toBeDefined();
  });
});
