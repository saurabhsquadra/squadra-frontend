import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(req:NextRequest) {
  const videoPath = path.resolve("public/v2.mp4"); 
  const stat = await fs.promises.stat(videoPath);
  const videoSize = stat.size;

  // Extract the "Range" header from the request
  const range = req.headers.get("range");
  if (!range) {
    return new Response("Range header required", { status: 416 });
  }

  // Parse the range value
  const CHUNK_SIZE = 10 ** 6; // 1MB chunk
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE - 1, videoSize - 1);

  // Create the headers for the response
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": `${contentLength}`,
    "Content-Type": "video/mp4", // ✅ Changed to MP4 for iOS compatibility
  };

  // Create a Node.js ReadStream for the video file
  const nodeStream = fs.createReadStream(videoPath, { start, end });

  // Convert Node.js ReadStream to Web Streams ReadableStream
  const readableStream = new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk) => {
        controller.enqueue(chunk); // Enqueue chunks of data to the Web ReadableStream
      });

      nodeStream.on("end", () => {
        controller.close(); // Close the stream when done
      });

      nodeStream.on("error", (err) => {
        controller.error(err); // Handle errors
      });
    },
  });

  // Return the Response with the web-compatible ReadableStream
  return new Response(readableStream, { status: 206, headers });
}


// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//   // Replace this URL with your direct video URL
//   const videoUrl =
//     "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4";

//   // Extract the Range header from the request
//   const range = req.headers.get("range");
//   if (!range) {
//     return new Response("Range header required", { status: 416 });
//   }

//   try {
//     // Make a HEAD request to get the content length
//     const headResponse = await fetch(videoUrl, { method: "HEAD" });
//     if (!headResponse.ok) {
//       return new Response("Failed to fetch video metadata", { status: 500 });
//     }

//     const videoSize = Number(headResponse.headers.get("content-length"));
//     const contentType = headResponse.headers.get("content-type") || "video/mp4";

//     // Parse the range header
//     const CHUNK_SIZE = 10 ** 6; // 1MB chunk
//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE - 1, videoSize - 1);

//     // Create headers for the response
//     const contentLength = end - start + 1;
//     const headers = {
//       "Content-Range": `bytes ${start}-${end}/${videoSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": contentLength.toString(),
//       "Content-Type": contentType,
//     };

//     // Fetch the specific byte range
//     const response = await fetch(videoUrl, {
//       headers: {
//         Range: `bytes=${start}-${end}`,
//       },
//     });

//     if (!response.ok) {
//       return new Response("Failed to fetch video chunk", { status: 500 });
//     }

//     // Return the streaming response
//     return new Response(response.body, {
//       status: 206,
//       headers,
//     });
//   } catch (error) {
//     console.error("Error streaming video:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
