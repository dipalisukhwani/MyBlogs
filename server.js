import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("./Data/db.json");
const middlewares = jsonserver.defaults({
  static: "./build",
});
const port = 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(port, () => {
  console.log("Server is running on port", port);
});
