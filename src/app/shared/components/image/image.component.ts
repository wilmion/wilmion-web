import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() url: string | null = '';
  @Input() alt: string = '';
  @Input() rounded: boolean = false;
  @Input() class: string = '';
  @Input() width: number = 0;
  @Input() height: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
