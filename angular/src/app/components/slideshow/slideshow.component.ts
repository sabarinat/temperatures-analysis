import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent {
  images: string[] = ['assets/Images/overview.jpg', 'assets/Images/server.jpg', 'assets/Images/warehouse.png'];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000); // Change image every 1 second
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Clear interval on component destroy to prevent memory leaks
  }
}
