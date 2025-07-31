import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownVisible = false;
  openLogOutModal = false;
  user: any;
  avatar = '';
  constructor(private router: Router, private authService: AuthServiceService){}

  ngOnInit(): void{
    this.getUser();
  }

  getUser(): void{
    this.user = this.authService.getUser();
    this.avatar = this.user?.firstName?.charAt(0).toUpperCase() + this.user?.lastName.charAt(0).toUpperCase();
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.avatar-container')) {
      this.dropdownVisible = false;
    }
  }

  preventClose(event: MouseEvent): void {
    event.stopPropagation();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  onLogOut(): void{
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  openProfile(): void {
    this.router.navigate(['/profile']);
  }

  openSettings(): void {
    this.router.navigate(['/settings']);
  }

  openMyBooks(): void {
    this.router.navigate(['/my-books']);
  }
  
}
