export interface StatDto {
  readonly type: 'NU' | 'VTTBP' | 'VTTPP' | 'VTTCP' | 'NOCWSTF';
}

export interface Stat extends StatDto {
  readonly id: string;

  readonly createdAt: string;

  readonly post: any | null;
}

export interface StatQueries extends Partial<StatDto> {
  readonly limit?: string;
  readonly offset?: string;
}
