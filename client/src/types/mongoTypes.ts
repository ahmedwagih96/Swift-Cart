export interface MongoType {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ItemType extends MongoType {
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: string;
  image: string;
  count?: number;
}

export interface UserType extends MongoType {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export interface OrderType extends MongoType {
  stripeSessionId: string;
  products: Products[];
  user: UserType;
  status: string;
  totalPrice: number;
}

interface Products {
  item: ItemType;
  count: number;
}
