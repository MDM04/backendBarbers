import mongoose, { Document, Schema } from 'mongoose';

interface ILogin extends Document {
  username: string;
  password: string;
}

const loginSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Login = mongoose.model<ILogin>('Login', loginSchema);

export default Login;
