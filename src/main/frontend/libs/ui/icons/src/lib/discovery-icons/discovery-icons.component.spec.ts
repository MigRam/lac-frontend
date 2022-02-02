import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryIconsComponent } from './discovery-icons.component';

describe('DiscoveryIconsComponent', () => {
  let component: DiscoveryIconsComponent;
  let fixture: ComponentFixture<DiscoveryIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
