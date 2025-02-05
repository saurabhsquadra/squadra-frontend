import connectMongo from "@/app/lib/mongodb";
import Job from "@/app/models/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const jobsList = await Job.aggregate(
      [{
        $group: {
          _id: "$jobCategory",
          jobs: { $push: "$$ROOT" },
          count: { $sum: 1 }
        }
      },
      {
        $addFields: {
          jobsCount: "$count",
          sortPriority: {
            $cond: {
              if: { $eq: ["$_id", "Development & Technology"] },
              then: 0, // Highest priority for Development & Technology
              else: 1  // Lower priority for all others
            }
          }

        }
      },
      {
        $project: {
          count: 0
        }
      },
      {
        $sort: {
          sortPriority: 1, // "Development & Technology" first
          _id: 1          // Then alphabetical order for the rest
        }
      }
    ]
    );

    return NextResponse.json({ data: jobsList });
  } catch (error) {
    return NextResponse.json({ error });
  }
}


export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    if (body.jobTitle) {
      const job = await Job.create(body);
      return NextResponse.json(
        { job, message: "Your job post has been created" },
        { status: 201 }
      );
    }
    return NextResponse.json(
      { message: "Job title is missing" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An error occurred' },
      { status: 400 }
    );
  }
}



