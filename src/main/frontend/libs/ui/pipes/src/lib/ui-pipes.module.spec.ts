import { async, TestBed } from '@angular/core/testing';
import { UiPipesModule } from './ui-pipes.module';

describe('UiPipesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPipesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiPipesModule).toBeDefined();
  });
});
