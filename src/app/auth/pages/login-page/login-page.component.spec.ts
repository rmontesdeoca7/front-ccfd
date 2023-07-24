import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let compiled: HTMLElement;
  let service: AuthService;
  let httpMock: HttpTestingController;
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        FormBuilder
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( AuthService );
    httpMock = TestBed.inject( HttpTestingController );

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
