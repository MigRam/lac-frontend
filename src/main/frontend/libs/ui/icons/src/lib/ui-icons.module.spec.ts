import { async, TestBed } from '@angular/core/testing';
import { UiIconsModule } from './ui-icons.module';

describe('UiIconsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiIconsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiIconsModule).toBeDefined();
  });
});
