import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css'],
})
export class VideoFrameComponent {
  @Input() url = '';
  @Input() isSmallScreen = false;
}
