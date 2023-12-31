import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router );

  public loginForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login( email, password )
      .subscribe( {
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }

      })
  }
  
}
