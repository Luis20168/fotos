import app from "./app.js";
import { db } from "./config/db.js"
import userRoutes from "./routes/user.routes.js";

//settigns
app.set('port', 3000)


//db
db();

app.use('/', userRoutes)


app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'))
})