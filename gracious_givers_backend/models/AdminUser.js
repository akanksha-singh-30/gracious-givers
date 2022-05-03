/**
 * Venkata Saikiran Kattekola (B00857007)
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminUserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    security_q1: { type: String, required: true, trim: true },
    security_a1: { type: String, required: true, trim: true },
    security_q2: { type: String, required: true, trim: true },
    security_a2: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
adminUserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};
const AdminUser = mongoose.model("admin", adminUserSchema, "admin");
module.exports = AdminUser;
