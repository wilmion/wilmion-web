import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SocialMedia } from '@models/socialMedia.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  @Input() socialMedia: SocialMedia | undefined;

  @Output() edit = new EventEmitter<SocialMedia>();

  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    this.edit.emit(this.socialMedia);
  }
}
