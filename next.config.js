module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.noedbremsen.dk/',
        permanent: true,
      },
    ]
  },
}
