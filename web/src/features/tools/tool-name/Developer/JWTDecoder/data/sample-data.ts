// ----------------------------
// Basic Samples
// ----------------------------
export const sampleJwt01 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJ1c2VyIjoiam9obl9kb2UiLCJyb2xlIjoiYWRtaW4ifQ."
+ "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";

export const sampleJwt02 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ."
+ "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const sampleJwt03 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdGUiXSwiaXNQcmVtaXVtIjp0cnVlfQ."
+ "j2j3F_7VZIv3RNpX6A_FCj6ZJdT4tVqQpX5aF9Lg3zA";

// ----------------------------
// JWT with exp, nbf, iss, aud
// ----------------------------
export const sampleJwt04 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJzdWIiOiIxIiwiaXNzIjoiZmxvd3Rvb2x5LmFwcCIsImF1ZCI6InVzZXIiLCJleHAiOjE3MDAwMDAwMDAsImlhdCI6MTcwMDAwMDAwMCwibmJmIjoxNjk5OTk5OTk5fQ."
+ "Fj8Y7Q8A6P0Z1X3MEkN9F1b6l29Y2t7Ap9LgF2pPDaM";

// ----------------------------
// JWT with nested JSON
// ----------------------------
export const sampleJwt05 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJ1c2VyIjp7ImlkIjoxMjMsIm5hbWUiOiJBcWlsIE1hdWxhbmEiLCJhZGRyZXNzIjp7ImNpdHkiOiJKYWt3YXJ0YSIsInppcCI6IjQzMDAwIn19fQ."
+ "Sn8kF2mA91QwsF5G7p1mX3oS9c8eT7bW2uP3z0fB8KM";

// ----------------------------
// JWT with long array
// ----------------------------
export const sampleJwt06 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJ1c2VyIjoiYW1hbmRhIiwiZ3JvdXBzIjpbImFkbWluIiwidXNlciIsInVzZXIyIiwicmVhZGVyIiwid3JpdGVyIiwicHJlbWl1bSJdfQ."
+ "Y2J5F4sM0T2hA1aZ8G6oW5dL2W8xH9bT3yF2nQ1vVc";

// ----------------------------
// JWT with boolean + mix types
// ----------------------------
export const sampleJwt07 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJpZCI6NTAsImFjdGl2ZSI6dHJ1ZSwicHJlbWl1bSI6ZmFsc2UsInVzZXJuYW1lIjoiYXFpbCIsImFnZSI6MjV9."
+ "Lk3nF9eT7P1vS3oG6c4lQ1yX9f3gJ8bD2wH9gT3aVcE";

// ----------------------------
// Access Token style
// ----------------------------
export const sampleJwt08 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cCI6ImFjY2VzcyJ9."
+ "eyJpZCI6MSwic2NvcGUiOiJhY2Nlc3M6dXNlciIsImV4cCI6MTcwMDAwMDAwMH0."
+ "H8lZ4tJ9L2aP2yM8N5rH1oK9Y2mS1fV7T4zB3rCnE8M";

// ----------------------------
// Refresh Token style
// ----------------------------
export const sampleJwt09 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cCI6InJlZnJlc2gifQ."
+ "eyJpZCI6MSwiaWF0IjoxNzAwMDAwMDAwLCJleHAiOjE3MzAwMDAwMDB9."
+ "T3sQ6rA1F7pN8aE4jD9wM7bQ5kN2X1tC9W0fF3hK6ZU";

// ----------------------------
// More complex custom claims
// ----------------------------
export const sampleJwt10 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
+ "eyJ1c2VySWQiOjEyMzQsInVzZXJUeXBlIjoiZGV2ZWxvcGVyIiwiYWN0aXZlU2Vzc2lvbnMiOjE1LCJzZXR0aW5ncyI6eyJkYXJrTW9kZSI6dHJ1ZSwibGFuZ3VhZ2UiOiJlbiJ9fQ."
+ "W7kL5fM3U2oR4tC8P2bH7vF9L0nF3qE6Y8sM1dC2rHc";

// ----------------------------
// Export ALL in Record<string, string>
// ----------------------------
export const jwtSampleData: Record<string, string> = {
  "Simple JWT": sampleJwt01,
  "Standard JWT": sampleJwt02,
  "Extended JWT": sampleJwt03,
  "JWT with exp/nbf/iss/aud": sampleJwt04,
  "Nested JSON JWT": sampleJwt05,
  "Long Array JWT": sampleJwt06,
  "Boolean & Mix Types JWT": sampleJwt07,
  "Access Token Style JWT": sampleJwt08,
  "Refresh Token Style JWT": sampleJwt09,
  "Complex Claims JWT": sampleJwt10,
};
