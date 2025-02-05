import { model, models, Schema } from "mongoose";

export interface IApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  joiningDays: string;
  webLink: string;
  linkedProfile: string;
  resume: string;
  applicationType: string;
  additionalInfo: string;
  jobId: Schema.Types.ObjectId;
}
const ApplicationSchema = new Schema<IApplication>({
  firstName: { type: String },
  applicationType: {
    type: String,
    enum: ["DIRECT_APPLY", "OTHER"],
    default: "OTHER",
  },
  jobId: { type: Schema.Types.ObjectId, ref: "Job", optional: true },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String },
  experience: { type: String },
  joiningDays: { type: String },
  webLink: { type: String },
  linkedProfile: { type: String },
  resume: { type: String },
  additionalInfo: { type: String },
});
const Application = models.Application || model("Application", ApplicationSchema);
export default Application;
