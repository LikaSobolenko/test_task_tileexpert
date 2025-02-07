import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  constructor(
    public router: Router
    ) {}

    backToMainPage(): void {
      this.router.navigate(['/main']);
    }
}
