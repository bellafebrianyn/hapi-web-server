const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      // Detailed notation
      const handler = (request, h) => {
        const response = h.response("success");
        response.type("text/plain");
        response.header("X-Custom", "some-value");
        return response;
      };

      // Chained notation
      // const handler = (request, h) => {
      //     return h.response('success')
      //         .type('text/plain')
      //         .header('X-Custom', 'some-value');
      // };
    },
  },
];

module.exports = routes;
