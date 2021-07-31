const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://viacep.com.br/ws/',
    secure: true,
    logLevel: 'debug',
    //pathRewrite: { '^/api': '' }
  }
]

module.exports = PROXY_CONFIG;