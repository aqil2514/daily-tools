export const urlParserSamples = {
  basic: "https://example.com",

  withPathAndQuery:
    "https://example.com/products/shoes?category=men&sort=price",

  withTrackingParams:
    "https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=sale",

  withAuthAndPort:
    "https://user:password@sub.example.co.id:8080/admin/dashboard",

  complex:
    "https://admin:secret@shop.example.co.uk:8443/orders/12345?status=paid&items[]=sku1&items[]=sku2&gclid=abcd1234#invoice",
};
