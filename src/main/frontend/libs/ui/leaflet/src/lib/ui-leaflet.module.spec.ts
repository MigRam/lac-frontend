import { async, TestBed } from '@angular/core/testing';
import { UiLeafletModule } from './ui-leaflet.module';

describe('UiLeafletModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLeafletModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiLeafletModule).toBeDefined();
  });
});
