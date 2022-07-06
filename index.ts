import express from "express";
import { Config } from "./config";
import { append as staticRoutesAppend } from "./src/routes/static";
import { append as templatesRoutesAppend } from "./src/routes/templates";
import { append as apiRoutesAppend } from "./src/routes/api";

const app = express();
staticRoutesAppend(app);
templatesRoutesAppend(app);
apiRoutesAppend(app);

app.listen(Config.PORT, () => {
  console.log(`app started on port: ${Config.PORT}...`);
});
