import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public searchInput = false;
  public isFocus = false;

  constructor(
    ) { }

    ngOnInit() {}

    search(): void {
      this.searchInput = true;
    }

    focusField(): void {
      this.isFocus = true;
    }

}
