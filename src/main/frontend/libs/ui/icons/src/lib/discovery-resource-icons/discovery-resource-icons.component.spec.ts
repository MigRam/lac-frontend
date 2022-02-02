import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryResourceIconsComponent } from './discovery-resource-icons.component';

describe('DiscoveryResourceIconsComponent', () => {
  let component: DiscoveryResourceIconsComponent;
  let fixture: ComponentFixture<DiscoveryResourceIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryResourceIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryResourceIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
