export interface ILDV{
  code: string;
  name: string;
  details: [ILDVDetail];
}

export interface ILDVDetail{
  code: string;
  value: string;
  description: string;
}
