module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://noedbremsen.dk/',
        permanent: false,
        basePath: false
      },
    ]
  },
};
