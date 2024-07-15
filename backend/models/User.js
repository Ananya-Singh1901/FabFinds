import mongoose from 'mongoose';
const UsersSchema =  new mongoose.Schema( {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now() },
  });
  const User = mongoose.model('User', UsersSchema);
  export default User;