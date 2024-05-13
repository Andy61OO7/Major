const connectDB = require("./db/connect")
const Itemsjson = require("./items.json")
const Items = require("./models/items")
const start = async () => {
    try {
        await connectDB();
        await Items.deleteMany();
        await Items.create(Itemsjson);
        console.log("Yeahhhhhhhh");
    }
    catch (error){
        console.log(error);
    }
}


start();