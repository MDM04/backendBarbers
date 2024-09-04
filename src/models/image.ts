import  { Document, Schema, model } from 'mongoose';

interface IPhoto extends Document {
  url?: string;
  fileData?: string;
}

const photoSchema: Schema<IPhoto> = new Schema({
  url: {
    type: String,
    required: false,
    trim: true,
  },
  fileData: {
    type: String,
    required: false,
    trim: true,
  }
}, {
  timestamps: true,
});

export const Photo = model<IPhoto>('Photo', photoSchema);

export default Photo;
