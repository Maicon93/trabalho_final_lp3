window.onload = function() {
  const DisableTryItOutPlugin = () => {
    return {
      statePlugins: {
        spec: {
          wrapSelectors: { allowTryItOutFor: () => () => true } //false para Executar testes
        }
      }
    }
  }
  window.ui = SwaggerUIBundle({
  url: "/docs/swagger.yaml",
    dom_id: '#swagger-ui',
    docExpansion: 'none',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis
    ],
    plugins: [
      DisableTryItOutPlugin
    ],
  });
};