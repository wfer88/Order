export interface User {
  userId: number;
  name: string;
  surname: string;
  userAddresses: UserAddress[];
}

export interface UserAddress {
  userAddressId: number;
  userId: number;
  addressType: AddressType;
  streetAddress: string;
  suburb: string;
  city: string;
  postalCode: number;
  user: User;
}

export enum AddressType {
  Residential,
  Business
}