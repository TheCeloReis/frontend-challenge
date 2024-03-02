export interface Product {
  company: Company;
  item: Item;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Item {
  name: string;
  description: string;
  initialPrice: number;
  image: string;
  sections: Section[];
}

export interface Section {
  name: string;
  description: string;
  required: boolean;
  type: string;
  options: Option[];
}

export interface Option {
  name: string;
  price: number;
  discountPrice?: number;
}
