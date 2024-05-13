export interface IDietList {
  title: string;
  creatable: boolean;
  cards: IDietCard[];
  done?: boolean;
}

export interface IDietCard {
  id: number;
  content: string;
  labels: string[];
  user?: string;
}
