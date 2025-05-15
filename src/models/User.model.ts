import mongoose, { Schema, Document } from 'mongoose';

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser extends Document {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const GeoSchema = new Schema<Geo>({
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  suite: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  geo: { type: GeoSchema, required: true },
});

const CompanySchema = new Schema<Company>({
  name: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  bs: { type: String, required: true },
});

const UserSchema = new Schema<IUser>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: CompanySchema, required: true },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
