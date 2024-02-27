import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import { sequelize } from "./db/db";
import "./models/User";
import "./models/Book";
import "./models/Loan";
import userRouter from "./routes/user";
import bookRouter from "./routes/book";
import loanRouter from "./routes/loant";
import stripeRouter from "./routes/stripe";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use("/api/auth", userRouter)
app.use("/api", bookRouter)
app.use("/api", loanRouter)
app.use("/api", stripeRouter)


// SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))




export default app;