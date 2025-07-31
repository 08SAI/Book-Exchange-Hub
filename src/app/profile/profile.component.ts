import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private authService: AuthServiceService) {}
  ngOnInit() {
    this.user = this.authService.getUser();
  }
}