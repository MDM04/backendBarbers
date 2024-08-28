import { Schema, Document, model } from 'mongoose';

export interface IClient extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  username: string;
  password: string;
}

const ClientSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  birthDate: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const User = model<IClient>('User', ClientSchema);
