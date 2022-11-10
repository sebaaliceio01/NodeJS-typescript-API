import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors";
import routes from "./routes/index"
import sequelize from "./database/database.config";
import { syncUser } from "./models/user.model";

const app = express()

app.use(bodyParser.json())
app.use(cors());
app.use(express.json())

app.use("/", routes)

app.listen(process.env.PORT, async () => {
    syncUser()
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`RUNNING ON PORT ${process.env.PORT}`)
})