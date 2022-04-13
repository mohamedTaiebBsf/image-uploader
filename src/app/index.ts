import express from "express";

class App {
  private app: express.Application = express();
  private PORT: string | number = process.env.PORT || 5000;

  public run() {
    this.app.listen(this.PORT, () => {
      console.log(`🚀  Server ready at ${this.PORT}`);
    });
  }
}

export default App;
