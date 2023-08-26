import { IconType } from "react-icons";

export interface ICatalog {
  name: string;
  cover: string;
  images: string[];
  discount: number;
  tax: number;
  price: number;
  km_away: number;
  ratings: number;
  ratings_length: number;
  is_resort: boolean;
}

export interface IButton {
  rightIcon?: IconType;
  leftIcon?: IconType;
  style?: any;
}
