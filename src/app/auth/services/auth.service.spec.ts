import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should be call to login', (done) => {
    
    service.login('admin@admin.com', '123456').subscribe( user => {
      console.log({user})
      expect(user ).toBeTruthy();
      done()
    })
  });

}); 