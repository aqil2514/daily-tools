export const DEVELOPER_TOOLS = [
  "password-generator",
  "jwt-decoder",
  "uuid-generator",
  "base64-encoder",
  "url-encoder",
  "json-formatter",
  "yaml-json-converter",
  "html-escape",
  "regex-tester",
  "url-parser",
  "color-converter"
] as const;

export type DeveloperToolName = typeof DEVELOPER_TOOLS[number];
