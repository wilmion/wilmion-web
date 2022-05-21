import { ApiService } from '@core/services/api/api.service';
import { IInputFileData } from '@shared/components/inputs/file/file.component';
import { catchError, map } from 'rxjs';

export function petition(
  apiService: ApiService,
  image: IInputFileData[],
  switchMap: any
) {
  return apiService
    .createImage(
      image.map((f) => f.blob),
      image[0].size
    )
    .pipe(
      map((data) => data.payload.id as string),
      catchError((err) => {
        const payload = err.error.message as string;

        const id = payload.replace('This image already exist, the ID is ', '');
        return id;
      }),
      switchMap
    );
}
