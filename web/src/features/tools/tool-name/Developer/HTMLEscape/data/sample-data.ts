export const htmlEscapeSamples = {
  Simple: `<h1>Hello World</h1>`,
  Attributes: `<div class="box" data-id="10">Item</div>`,
  Script: `<script>alert("XSS")</script>`,
  Mixed: `<p>Price: 50 & 20 > 10</p>`,
} as const;

export const htmlUnescapeSamples = {
  Encoded1: `&lt;h1&gt;Hello World&lt;/h1&gt;`,
  Encoded2: `&lt;div class=&quot;box&quot;&gt;Item&lt;/div&gt;`,
  ScriptEncoded: `&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;`,
} as const;
