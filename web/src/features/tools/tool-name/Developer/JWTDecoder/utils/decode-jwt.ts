export interface DecodedJWT<
  Header = Record<string, unknown>,
  Payload = Record<string, unknown>
> {
  header: Header;
  payload: Payload;
  signature: string;
}

export type JWTDecodeError =
  | "INVALID_FORMAT"
  | "INVALID_HEADER"
  | "INVALID_PAYLOAD"
  | "INVALID_BASE64"
  | "UNKNOWN_ERROR";

export function base64UrlDecode<T = unknown>(input: string): T {
  try {
    let base64 = input.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }

    const json = atob(base64);
    return JSON.parse(json) as T;
  } catch {
    throw new Error("Invalid Base64URL encoding");
  }
}

export function decodeJwt<
  H extends Record<string, unknown> = Record<string, unknown>,
  P extends Record<string, unknown> = Record<string, unknown>
>(token: string): DecodedJWT<H, P> {
  if (!token || typeof token !== "string") {
    throw new Error("Token must be a string");
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT format. Expected 3 parts separated by dots.");
  }

  const [headerPart, payloadPart, signaturePart] = parts;

  const header = base64UrlDecode<H>(headerPart);
  const payload = base64UrlDecode<P>(payloadPart);

  return {
    header,
    payload,
    signature: signaturePart,
  };
}

export function safeDecodeJwt(token: string) {
  try {
    return { data: decodeJwt(token), error: null };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.message.includes("format")) {
      return { data: null, error: "INVALID_FORMAT" as JWTDecodeError };
    }
    if (err.message.includes("Base64URL")) {
      return { data: null, error: "INVALID_BASE64" as JWTDecodeError };
    }
    return { data: null, error: "UNKNOWN_ERROR" as JWTDecodeError };
  }
}
