export const jsonSamples = {
  Simple: `{"name": "John", "age": 30}`,
  Nested: `{"user": {"id": 1, "name": "Alice", "roles": ["admin", "editor"]}}`,
  Array: `[{ "id": 1 }, { "id": 2 }, { "id": 3 }]`,
  APIResponse: `{
    "success": true,
    "data": {
      "id": 42,
      "title": "Flowtooly JSON Formatter",
      "tags": ["json", "formatter", "dev tool"]
    }
  }`,
} as const;
