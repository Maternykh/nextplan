import mongoose from "mongoose";
const daySchema = new mongoose.Schema(
  {
    tascName: {
      type: String,
      require: true,
      unique: true,
    },
    dayName: {
      type: String,
      require: true,
    },
    events: [
      {
        isCompleted: { type: Boolean, require: true },
        id: { type: Number, require: true },
        act: { type: String, require: true },
        timeAct: { type: String, require: true },
      },
    ],
    monthAndYears: {
      type: Number,
      require: true,
    },
    category: [
      {
        id: { type: Number, require: true },
        categ: { type: String },
      },
    ],
    color: {
      type: String,
      require: true,
    },
    note: {
      type: String,
    },
    pattern: {
      type: String,
    },
    owner: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export const Day = mongoose.models.Day || mongoose.model("Day", daySchema);
