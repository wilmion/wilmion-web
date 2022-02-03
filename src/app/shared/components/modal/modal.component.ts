import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() title: string = 'MODAL TITLE';
  @Output() onCloseModal = new EventEmitter();

  /*Modal functionality*/
  @Input() open: boolean = false;
  finishAnimation: boolean = false;
  openAnimation: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.evualationState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evualationState();
  }

  private evualationState() {
    if (this.open) this.onOpenAnimation();
    if (!this.open) this.onCloseAnimation();
  }

  onCloseAnimation() {
    this.finishAnimation = false;
    this.openAnimation = false;

    setTimeout(() => {
      this.finishAnimation = true;
    }, 600);
  }

  onOpenAnimation() {
    this.finishAnimation = false;

    setTimeout(() => {
      this.openAnimation = true;
    }, 60);
  }

  onClickOnCross() {
    this.onCloseModal.emit();
  }
}
