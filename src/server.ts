import 'reflect-metadata'
import './database'
import { app } from './app'
 
app.listen(8000, () => console.log("Server is running in port 8000"));