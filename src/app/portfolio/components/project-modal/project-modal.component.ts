import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit, OnChanges {
  @Input() url: string = '';
  imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    this.transformUrlToCssRule();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.transformUrlToCssRule();
  }

  private transformUrlToCssRule() {
    const newUrl = `url("${this.url}")`;

    this.imageUrl = newUrl;
  }
}
