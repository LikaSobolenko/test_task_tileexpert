import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  screenSize: string = 'desktop';

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;
    if (width > 480) {
      this.screenSize = 'desktop'
    } else {
      this.screenSize = 'mobile';
    }
  }
}
