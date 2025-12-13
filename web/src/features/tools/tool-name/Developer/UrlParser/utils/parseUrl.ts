import {
  ParsedUrlResult,
  UrlParseError,
  UrlQueryParam,
} from "../types/output";

export function parseUrl(input: string): ParsedUrlResult | UrlParseError {
  const trimmed = input.trim();

  if (!trimmed) {
    return { code: "EMPTY" };
  }

  let url: URL;

  try {
    url = new URL(trimmed);
  } catch {
    return { code: "INVALID_URL" };
  }

  /* core */
  const core = {
    href: url.href,
    protocol: url.protocol,
    username: url.username,
    password: url.password,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash,
  };

  /* query */
  const params: UrlQueryParam[] = [];
  url.searchParams.forEach((value, key) => {
    params.push({ key, value });
  });

  const query = {
    raw: url.search.replace(/^\?/, ""),
    params,
  };

  /* insights */
  const trackingParamKeys = ["utm_", "gclid", "fbclid"];

  const trackingParams = params
    .map((p) => p.key)
    .filter((key) =>
      trackingParamKeys.some((tp) =>
        tp.endsWith("_") ? key.startsWith(tp) : key === tp
      )
    );

  const insights = {
    isHttps: url.protocol === "https:",
    hasCustomPort: Boolean(url.port),
    hasAuth: Boolean(url.username || url.password),
    trackingParams,
  };

  return {
    core,
    query,
    insights,
  };
}
