const path = require("path");
const {readFileSync} = require("fs")
const serviceAccount = JSON.parse(readFileSync("./firebaseKey.json"));



const options = {
    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },
    sql:{
      client:"mysql",
      connection:{
          host:"127.0.0.1",
          user:"root",
          password:process.env.PASSWORD || "",
          database:"ecommerce"
      }
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename:path.join(__dirname , "../DB/ecommerce.sqlite")
        },
        useNullAsDefault:true
    },
    firebase:{
        serviceKey:{serviceAccount},
        databaseUrl:"https://ecommerce-6e331.firebaseio.com"
    }
}

module.exports = options