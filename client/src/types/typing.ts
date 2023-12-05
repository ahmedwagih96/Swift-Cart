export interface FormValues {
  billingAddress: BillingAddress;
  shippingAddress: ShippingAddress;
  email: string;
  phoneNumber: string;
}

export interface BillingAddress {
  firstName: string;
  lastName: string;
  country: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ShippingAddress extends BillingAddress {
  isSameAddress: boolean;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues extends LoginValues {
  username: string;
  confirmPassword: string;
}
