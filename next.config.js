module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://www.noedbremsen.dk/',
        permanent: true,
      },
    ]
  },
}
