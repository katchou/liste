export interface List {
  id?: string;
  name: string;
  categories?: Category[];
}

export interface Category {
  id?: string;
  name: string;
}

export interface Item {
  id?: string;
  name: string;
  quantity?: string;
}
