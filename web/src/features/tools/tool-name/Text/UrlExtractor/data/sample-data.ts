type SampleKey = "sample-1" | "sample-2" | "sample-3";

export const sampleData: Record<SampleKey, string> = {
  "sample-1": `Here are some mixed lines containing URLs:
https://google.com
Some text here...
Visit our site at https://flowtooly.com/tools/url-extractor
Contact: www.example.org/contact
`,

  "sample-2": `Random content with embedded URLs:
Check docs: https://developer.mozilla.org/en-US/docs/
Github: https://github.com/openai
Blog: medium.com/tag/web-development
`,

  "sample-3": `URLs hidden in logs:
INFO: Fetching https://api.example.com/v1/users
INFO: Redirect to http://dashboard.example.com
INFO: CDN: cdn.example.net/assets/main.js
`,
};
