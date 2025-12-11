import YAML from "yaml";

export function yamlToJson(yamlText: string): string {
  const parsed = YAML.parse(yamlText);
  return JSON.stringify(parsed, null, 2);
}

export function jsonToYaml(jsonText: string): string {
  const obj = JSON.parse(jsonText);
  return YAML.stringify(obj);
}

export function validateYAML(text: string): { valid: boolean; error?: string } {
  try {
    YAML.parse(text);
    return { valid: true };
  } catch (err) {
    const message = "unknown Error";
    if (err instanceof Error) return { valid: false, error: err.message };
    return { valid: false, error: message };
  }
}

export function validateJSON(text: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(text);
    return { valid: true };
  } catch (err) {
    const message = "unknown Error";
    if (err instanceof Error) return { valid: false, error: err.message };
    return { valid: false, error: message };
  }
}
