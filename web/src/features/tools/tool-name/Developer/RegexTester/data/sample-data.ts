export const regexSamples = {
  Email: {
    pattern: `^[\\w.-]+@[\\w.-]+\\.\\w+$`,
    text: `hello@mail.com\ninvalid@@mail.com\nuser.name@domain.co`,
  },
  URL: {
    pattern: `https?:\\/\\/[^\\s]+`,
    text: `Visit https://google.com or http://flowtooly.app now!`,
  },
  Phone: {
    pattern: `\\+?\\d{10,13}`,
    text: `My number is +6281234567890 and 081234567890`,
  },
  Digits: {
    pattern: `\\d+`,
    text: `Order #1254 costs 350 dollars`,
  },
  Username: {
    pattern: `^[a-zA-Z0-9_]{3,16}$`,
    text: `john_doe\nuser-123\nAqil_M123`,
  },
} as const;
