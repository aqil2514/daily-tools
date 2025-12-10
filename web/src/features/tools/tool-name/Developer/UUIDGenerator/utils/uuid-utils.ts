// === UUID UTILITIES ===
// Supports: v1, v4, v7
// Includes: batch generate, formatting controls

// ------------------------------
// Helper: Remove dashes
// ------------------------------
export function removeDashes(uuid: string) {
  return uuid.replace(/-/g, "");
}

// ------------------------------
// Helper: Apply formatting
// ------------------------------
export function formatUUID(
  uuid: string,
  options?: {
    withDash?: boolean;
    uppercase?: boolean;
  }
) {
  let output = uuid;

  if (!options?.withDash) {
    output = removeDashes(output);
  }

  if (options?.uppercase) {
    output = output.toUpperCase();
  } else {
    output = output.toLowerCase();
  }

  return output;
}

// ------------------------------
// UUID v4 — Random UUID
// Uses crypto.getRandomValues
// ------------------------------
export function uuidV4() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  // Per RFC 4122
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant

  const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");

  return (
    hex.slice(0, 8) +
    "-" +
    hex.slice(8, 12) +
    "-" +
    hex.slice(12, 16) +
    "-" +
    hex.slice(16, 20) +
    "-" +
    hex.slice(20)
  );
}

// ------------------------------
// UUID v1 — Time-based
// (Simplified — good enough for client-side tools)
// ------------------------------
let _lastTimestamp = 0;
let _clockSeq = Math.floor(Math.random() * 0x3fff);
const _nodeId = crypto.getRandomValues(new Uint8Array(6));

export function uuidV1() {
  const timestamp = Date.now();

  if (timestamp <= _lastTimestamp) {
    _clockSeq++;
  }

  _lastTimestamp = timestamp;

  // Convert to 100-ns intervals
  const time = BigInt(timestamp) * BigInt(10000) + BigInt("0x01b21dd213814000");

  const hexTime = time.toString(16).padStart(16, "0");
  const tl = hexTime.slice(8);
  const tm = hexTime.slice(4, 8);
  const thv = (parseInt(hexTime.slice(0, 4), 16) | 0x1000).toString(16);

  const clockSeqHex = ((_clockSeq & 0x3fff) | 0x8000).toString(16);
  const node = [..._nodeId]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${tl}-${tm}-${thv}-${clockSeqHex}-${node}`;
}

// ------------------------------
// UUID v7 — Time-ordered UUID
// RFC 9562 (simplified spec)
// ------------------------------
export function uuidV7() {
  const now = Date.now();

  const timeHex = now.toString(16).padStart(12, "0");

  const rand = crypto.getRandomValues(new Uint8Array(10));
  const randHex = [...rand]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${timeHex.slice(0, 8)}-${timeHex.slice(8)}7${randHex.slice(
    1,
    4
  )}-${randHex.slice(4, 6)}-${randHex.slice(6)}`;
}

// ------------------------------
// Main Generator: Pick version
// ------------------------------
export function generateUUID(version: "v1" | "v4" | "v7") {
  switch (version) {
    case "v1":
      return uuidV1();
    case "v7":
      return uuidV7();
    default:
      return uuidV4();
  }
}

// ------------------------------
// Batch UUID generator
// ------------------------------
export function generateUUIDBatch(
  version: "v1" | "v4" | "v7",
  count: number,
  formatOptions?: { withDash: boolean; uppercase: boolean }
) {
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const baseUUID = generateUUID(version);
    const formatted = formatUUID(baseUUID, formatOptions);
    result.push(formatted);
  }

  return result;
}
