import { ItemType } from "../types/mongoTypes";

const carouselImages: string[] = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1698952163279-da370cb759bc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const dummyItems: ItemType[] = [
  {
    _id: "string-1",
    createdAt: "string",
    updatedAt: "string",
    __v: 1,
    name: "Item 1",
    shortDescription: "lorem ipsum not working lol",
    longDescription:
      "lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working",
    price: 20,
    category: "topRated",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "string-2",
    createdAt: "string",
    updatedAt: "string",
    __v: 1,
    name: "Item 2",
    shortDescription: "lorem ipsum not working lol",
    longDescription:
      "lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working",
    price: 20,
    category: "newArrivals",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: "string-3",
    createdAt: "string",
    updatedAt: "string",
    __v: 1,
    name: "Item 3",
    shortDescription: "lorem ipsum not working lol",
    longDescription:
      "lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working lorem ipsum not working",
    price: 20,
    category: "bestSellers",
    image:
      "https://plus.unsplash.com/premium_photo-1698952163279-da370cb759bc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export { carouselImages, dummyItems };
