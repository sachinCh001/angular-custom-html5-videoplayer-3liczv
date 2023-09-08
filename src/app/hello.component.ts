import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit, AfterViewInit {
  private video: HTMLVideoElement; // Declare the video element
  @Input() name: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Initialize the video element
    this.video = this.elementRef.nativeElement.querySelector('.video');
    // this.addMarkers();
    // this.addMarkers();
  }

  ngAfterViewInit() {}

  addMarkers() {
    const markersContainer =
      this.elementRef.nativeElement.querySelector('.progress-markers');
    const markerTimes = [5, 10, 15]; // Add the times (in seconds) where you want to place markers
    // console.log(this.video.duration);
    markerTimes.forEach((time) => {
      const marker = document.createElement('div');
      marker.className = 'progress-marker';
      marker.style.left = `${(time / this.video.duration) * 100}%`;
      markersContainer.appendChild(marker);
    });
  }
}
