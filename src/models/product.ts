import { Schema, Document, model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  priceMonthly: number;
  priceQuarterly: number;
  priceSemiannually: number;
  priceAnnually: number;
}



const ProductSchema: Schema = new Schema({
  name: { type: String, required: true,unique:true },
  price: { type: Number, required: true },
  priceMonthly: { type: Number, required: true },
  priceQuarterly: { type: Number, required: true},
  priceSemiannually: { type: Number, required: true },
  priceAnnually: { type: Number, required: true},
});

export const Product = model<IProduct>('Product', ProductSchema);
