import { FormValues, LoginValues, RegisterValues } from "../types/typing";

export const initialCheckoutValues: FormValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

export const initialLoginValues: LoginValues = {
  email: "",
  password: "",
};

export const initialRegisterValues: RegisterValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
