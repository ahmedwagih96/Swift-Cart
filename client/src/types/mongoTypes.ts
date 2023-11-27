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
  count? : number
}