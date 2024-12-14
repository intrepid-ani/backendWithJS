import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/index.db.js';

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`\n Server running on PORT ${PORT}`);
        });
        app.on('error', (error) => {
            console.log(`\n Server error ${error}`);
        });
    })
    .catch((error) => {
        console.log(`\n Error occured : ${error}`);
    });