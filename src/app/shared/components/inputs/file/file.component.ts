import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { getImageFromFile } from '@core/utils/image.util';

import { ApiService } from '@core/services/api/api.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() label: string = '';
  @Input() max: number = 1;
  @Input() blobs: IInputFileData[] = [];

  @Output() onGetValues = new EventEmitter<IInputFileData[]>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  selectFiles() {
    const el = document.createElement('input');
    el.type = 'file';
    el.accept = 'image/*';
    el.multiple = this.max > 1;

    el.addEventListener('input', () => {
      const filesList: any = el.files;

      if (!filesList) throw new Error('No files ♨️');

      const files = [...filesList] as File[];

      files.forEach((f) => {
        const exist = this.blobs.find((blob) => blob.blob.name == f.name);

        if (exist) return;

        if (this.blobs.length >= this.max) return;

        getImageFromFile(f, (url, size) => {
          const newBlobs = this.blobs;

          newBlobs.push({
            blob: f,
            imageUrl: url,
            size,
          });

          this.onChangeValue(newBlobs);
        });
      });
    });

    el.click();
  }
  onDeleteBlob(index: number) {
    const newBlobs = this.blobs;

    newBlobs.splice(index, 1);

    this.onChangeValue(newBlobs);
  }

  private onChangeValue(blobs: IInputFileData[]) {
    this.onGetValues.emit(blobs);
  }
}

export interface IInputFileData {
  readonly blob: File;
  readonly imageUrl: string;
  readonly size: string;
}
