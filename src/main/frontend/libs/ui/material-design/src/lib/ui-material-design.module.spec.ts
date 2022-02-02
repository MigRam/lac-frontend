import { async, TestBed } from '@angular/core/testing';
import { UiMaterialDesignModule } from './ui-material-design.module';

describe('UiMaterialDesignModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiMaterialDesignModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiMaterialDesignModule).toBeDefined();
  });
});
