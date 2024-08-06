const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API Dokümantasyonu',
      version: '1.0.0',
      description: 'API dokümantasyonu için Swagger kullanımı'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Geliştirme sunucusu'
      }
    ]
  };
  
  module.exports = swaggerDefinition;
  