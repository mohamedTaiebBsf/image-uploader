import express from "express";

class App {
  private app: express.Application = express();
  private PORT: string | number = process.env.PORT || 5000;

  constructor(routers: express.Router[]) {
    this.initializeRoutes(routers);
  }

  public run() {
    this.app.listen(this.PORT, () => {
      console.log(`🚀  Server ready at ${this.PORT}`);
    });
  }

  private initializeRoutes(routers: express.Router[]) {
    routers.forEach((router) => this.app.use("/", router));
  }
}

export default App;
