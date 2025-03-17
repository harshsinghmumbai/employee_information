import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    textarea: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Auth = models.Auth || mongoose.model("Auth", userSchema);
export default Auth;
