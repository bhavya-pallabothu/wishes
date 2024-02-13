import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  safeUrl;

  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('assets/Valentine.mp4')
  
  }
  toggleFullScreen() {
    const videoElement = this.videoPlayer.nativeElement as HTMLVideoElement;
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch(error => {
        console.error('Error attempting to enable full-screen mode:', error);
      });
    } else {
      document.exitFullscreen();
    }
  }
}
