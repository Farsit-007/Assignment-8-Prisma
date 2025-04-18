import express, { Application, Request, Response } from "express"
import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
const app : Application = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send({
      Message: "Assignment-8 Server",
    });
  });

app.use("/api",router)
app.use(globalErrorHandler)
app.use(notFound)
export default app