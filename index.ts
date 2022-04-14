import App from "./src/app";
import routers from "./src/routes";

const app = new App(routers);

app.run();
