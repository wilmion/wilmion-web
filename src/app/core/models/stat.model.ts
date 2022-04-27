import { IStat } from 'src/app/admin/components/atoms/stat/stat.component';

export interface StatDto {
  readonly type: 'NU' | 'VTTBP' | 'VTTPP' | 'VTTCP' | 'NOCWSTF';
}

export interface Stat extends StatDto {
  readonly id: string;

  readonly createdAt: string;

  readonly post: any | null;
}

export interface StatQueries {
  readonly from: string;
  readonly to: string;
  readonly type: string;
}

export interface GraphicStat {
  title: string;
  raw: IStat[];
}
