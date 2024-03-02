export interface Product {
  company: Company;
  item: Item;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  initialPrice: number;
  image: string;
  sections: Section[];
}

export interface Section {
  id: string;
  name: string;
  description: string;
  required: boolean;
  type: string;
  options: Option[];
}

export interface Option {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
}
