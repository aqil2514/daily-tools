import { gaClient } from "./ga-client";

export async function getVisitorReport() {
  const [report] = await gaClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    metrics: [{ name: "totalUsers" }],
    dateRanges: [{ startDate: "2015-08-14", endDate: "today" }],
  });

  return report;
}

export async function getTotalPageViews() {
  const [report] = await gaClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    metrics: [{ name: "screenPageViews" }],
    dateRanges: [{ startDate: "2015-08-14", endDate: "today" }],
  });

  return report;
}

export async function getPageViewsPerPage() {
  const [report] = await gaClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }],
    dateRanges: [{ startDate: "2015-08-14", endDate: "today" }],
    orderBys: [
      {
        metric: { metricName: "screenPageViews" },
        desc: true,
      },
    ],
  });

  return report;
}
