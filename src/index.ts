import app from "./app";
import { sequelize } from "./db/db";

const PORT = process.env.PORT || 3000;

async function main() {
    try {
      await sequelize.sync()
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  
  main();