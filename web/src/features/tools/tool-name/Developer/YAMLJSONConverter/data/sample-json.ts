export const sampleJSON = {
  Simple: `{"name": "John", "age": 30}`,
  Nested: `{
  "user": {
    "id": 1,
    "details": {
      "email": "john@example.com",
      "roles": ["admin", "editor"]
    }
  }
}`,
  APIResponse: `{
  "success": true,
  "data": {
    "id": 42,
    "status": "ok"
  }
}`,
} as const;
