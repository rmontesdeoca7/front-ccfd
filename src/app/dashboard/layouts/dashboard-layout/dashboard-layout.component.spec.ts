import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { AuthService } from '../../../auth/services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DashboardLayoutComponent', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardLayoutComponent],
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
      ]
    });
    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
