/* eslint-disable @typescript-eslint/no-explicit-any */
import connectMongo from "@/app/lib/mongodb";
import Application from "@/app/models/applications";
import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import itLogo from "@/utilities/images/it-logo.svg";
import Job from "@/app/models/jobs";
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;
    const applicationData: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      location: string;
      experience: string;
      joiningDays: string;
      webLink: string;
      linkedProfile: string;
      applicationType: string;
      additionalInfo: string;
      jobId: string | null;
      resume?: string;
    } = {
      firstName: body.firstName?.toString(),
      lastName: body.lastName?.toString(),
      email: body.email?.toString(),
      phone: body.phone?.toString(),
      location: body.location?.toString(),
      experience: body.experience?.toString(),
      joiningDays: body.joiningDays?.toString(),
      webLink: body.webLink?.toString(),
      linkedProfile: body.linkedProfile?.toString(),
      applicationType: body.applicationType?.toString(),
      additionalInfo: body.additionalInfo?.toString(),
      jobId: body.jobId?.toString() || null,
    };
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadParams: any = {
        Bucket: process.env.BUCKET_NAME,
        Key: `uploads/${(body.file as File).name}`,
        Body: buffer,
        ContentType: (body.file as File).type,
        ACL: "public-read",
      };
      const uploadResult = await s3.upload(uploadParams).promise();
      applicationData.resume = uploadResult.Location;
    }
    const data = await Application.create(applicationData);
    if (data) {
      const applicantEmail = applicationData.email;
      const HR_Email = process.env.HR_EMAIL || "mohit@squadramedia.com";
      const JobRole = await Job.findById(applicationData.jobId).select(
        "jobTitle -_id"
      );
      const JobTitle = JobRole?.jobTitle;
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: applicantEmail,
        subject: `Thank You for Applying to Squadra Media!`,
        text: `Hi ${applicationData.firstName},
      
      We are thrilled that you’ve taken the time to apply for a position at Squadra Media! We understand that applying for a job is both exciting and nerve-wracking, so kudos to you for taking this important step 🙌
      
      As you await an update regarding your application, here are a few things to keep in mind:
      
      1. Human Touch: Your application will be reviewed by a real-life human (no bots here—yay for humans!).
      2. High Application Volume: We’re currently experiencing a significant number of applications, so we kindly request your patience as we carefully screen each profile.
      3. Next Steps: Our recruiting team will review your profile thoroughly and keep you updated on your application status.
      
      Meanwhile, feel free to visit our careers page or explore more about us at [Squadra Media Website Link] to learn what makes life at Squadra Media so exciting.
      
      Thank you again for your interest and for investing your time with us. We truly appreciate it!
      
      Best Regards,  
      Squadra Media Recruiting Team`,
        html: `<p>Hi ${applicationData.firstName},</p>
      
      <p>We are thrilled that you’ve taken the time to apply for a position at <strong>Squadra Media</strong>! We understand that applying for a job is both exciting and nerve-wracking, so kudos to you for taking this important step 🙌</p>
      
      <p>As you await an update regarding your application, here are a few things to keep in mind:</p>
      
      <ul>
        <li><strong>Human Touch:</strong> Your application will be reviewed by a real-life human (no bots here—yay for humans!).</li>
        <li><strong>High Application Volume:</strong> We’re currently experiencing a significant number of applications, so we kindly request your patience as we carefully screen each profile.</li>
        <li><strong>Next Steps:</strong> Our recruiting team will review your profile thoroughly and keep you updated on your application status.</li>
      </ul>
      
      <p>Meanwhile, feel free to visit our <a href="[Squadra Media Website Link]" target="_blank">careers page</a> or explore more about us to learn what makes life at Squadra Media so exciting.</p>
      
      <p>Thank you again for your interest and for investing your time with us. We truly appreciate it!</p>
      
      <p>Best Regards,<br>  
      <strong>Squadra Media Recruiting Team</strong></p>
      
      <img src="${itLogo}" alt="Squadra Media Logo" style="width: 100px; margin-top: 20px;">`,
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: HR_Email,
        subject: `New Job Application Received`,
        text: `Hi Hiring Team,
      
      We have received a new application for the ${JobRole} position. Below are the details of the candidate:
      
      Name: ${applicationData.firstName} ${applicationData.lastName}
      Email: ${applicationData.email}
      Contact Number: ${applicationData.phone}
      Resume/CV: ${applicationData.resume || "No resume provided"}
      Application Date: ${new Date().toLocaleDateString()}
      
      Please review the application and proceed with the next steps as per our recruitment process. Let me know if you need any additional information or assistance.
      
      Thank you!
      
      Best Regards,  
      Squadra Media Recruiting Team`,
        html: `<p>Hi Hiring Team,</p>
      
      <p>We have received a new application for the <strong>${JobTitle}</strong> position. Below are the details of the candidate:</p>
      
      <ul>
        <li><strong>Name:</strong> ${applicationData.firstName} ${
          applicationData.lastName
        }</li>
        <li><strong>Email:</strong> ${applicationData.email}</li>
        <li><strong>Contact Number:</strong> ${applicationData.phone}</li>
        <li><strong>Resume/CV:</strong> ${
          applicationData.resume
            ? `<a href="${applicationData.resume}" target="_blank">View Resume</a>`
            : "No resume provided"
        }</li>
        <li><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</li>
      </ul>
      
      <p>Please review the application and proceed with the next steps as per our recruitment process. Let me know if you need any additional information or assistance.</p>
      
      <p>Thank you!</p>
      
      <p>Best Regards,<br>  
      <strong>Squadra Media Recruiting Team</strong></p>
      
      <img src="${itLogo}" alt="Squadra Media Logo" style="width: 100px; margin-top: 20px;">`,
      });
    }
    return NextResponse.json({
      success: true,
      data,
      message: "JOB Applied successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An error occurred" },
      { status: 400 }
    );
  }
}
