import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./configs/sqlConfig";
import user_router from "./routes/userRoutes";
import mother_router from "./routes/motherRoutes";
import child_router from "./routes/childRoutes";


dotenv.config();
const port = process.env.PORT || 5200;
const app = express();
app.use(json());
app.use(cors());

app.use("/user", user_router);
app.use("/child", child_router);
app.use("/mother", mother_router);

app.listen(port, () => {
  console.log(`Nuture Hub running on port ${port}`);

  testConnection();
});