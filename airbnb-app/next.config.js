/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "links.papareact.com",
      "jsonkeeper.com",
      "api.npoint.io",
    ],
  },

  //add environment variable for using Mapbox
  env: {
    mapbox_key:
      "pk.eyJ1IjoiY2hhdXRyYW5jbXQyNiIsImEiOiJjbGF1NDlmaGgwMnMyM3ZwbTh6MDB0dWE3In0.ULfl6La3PplRKOpfUKEyPA",
  },
};
