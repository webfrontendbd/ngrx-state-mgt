export interface Style {
  id: number;
  styleName: string;
  buyerName: string;
  department: string;
  gender: string;
  brand: string;
  userId: number;
  merchantTeamId: number;
  teamName: string;
  createdBy: string;
  created: string;
  seasons: any;
}

export interface Styles {
  styleList: Style[];
  errorText:string;
}
