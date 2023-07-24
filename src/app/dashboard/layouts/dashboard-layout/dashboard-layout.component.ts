import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  
  get user() {
    return this.authService.currentUser();
  }

  logout() {
    this.authService.logout();
  }

}
