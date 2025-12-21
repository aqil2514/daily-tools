import { getTotalPageViews, getVisitorReport } from "@/lib/analytics/reports";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("x-api-key");

  if (!key || key !== process.env.SHARED_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const [pageView, visitor] = await Promise.all([
      getTotalPageViews(),
      getVisitorReport(),
    ]);

    const totalVisitor = visitor.rows?.[0]?.metricValues?.[0]?.value ?? "0";

    const totalPageView = pageView.rows?.[0]?.metricValues?.[0]?.value ?? "0";

    return NextResponse.json({
      totalVisitor: Number(totalVisitor),
      totalPageView: Number(totalPageView),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
