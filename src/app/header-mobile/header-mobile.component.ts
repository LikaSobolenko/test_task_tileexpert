import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  standalone: false,
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  constructor(
    public router: Router
    ) {}

    toSearch(): void {
      this.router.navigate(['/search']);
    }
}
