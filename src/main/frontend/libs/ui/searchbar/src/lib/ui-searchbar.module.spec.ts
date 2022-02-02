import { async, TestBed } from '@angular/core/testing';
import { UiSearchbarModule } from './ui-searchbar.module';

describe('UiSearchbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSearchbarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSearchbarModule).toBeDefined();
  });
});
