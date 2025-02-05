import connectMongo from "@/app/lib/mongodb";
import Job from "@/app/models/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();

    const jobList = await Job.findById(params.id);

    if (jobList) {
      return NextResponse.json({ data: jobList });
    }

    return NextResponse.json(
      { message: `Jobs in category ${params.id} not found` },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An error occurred" },
      { status: 400 }
    );
  }
}


export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const job = await Job.findById(params.id);
    if (job) {
      const body = await req.json();
      const updateData = {
        jobTitle: body.jobTitle,
        jobCategory: body.jobCategory,
        location: body.location,
        employmentType: body.employmentType,
        yearsOfExperience: body.yearsOfExperience,
        companyDescription: body.companyDescription,
        qualifications: body.qualifications,
        additionalInfo: body.additionalInfo,
      };
      Object.assign(job, updateData);
      await job.save();
      return NextResponse.json({ job });
    }

    return NextResponse.json(
      { message: `Product ${params.id} not found` },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const job = await Job.findById(params.id);
    if (job) {
      await Job.findByIdAndDelete(job._id);
      return NextResponse.json({
        message: `Job ${params.id} has been deleted`,
      });
    }
    return NextResponse.json(
      { message: `Job ${params.id} not found` },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 400 }
    );
  }
}