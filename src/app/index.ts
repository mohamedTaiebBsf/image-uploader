import cors from "cors";
import express from "express";
import ImageManager from "../services/ImageManager";

class App {
  private app: express.Application = express();
  private PORT: string | number = process.env.PORT || 5000;

  constructor(routers: express.Router[]) {
    this.initializeMiddlewares();
    this.initializeRoutes(routers);
  }

  public run() {
    this.app.listen(this.PORT, () => {
      console.log(`🚀  Server ready at ${this.PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.static(new ImageManager().getTarget()));
  }

  private initializeRoutes(routers: express.Router[]) {
    routers.forEach((router) => this.app.use("/", router));
  }
}

export default App;
