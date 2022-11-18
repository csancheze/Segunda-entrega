const admin = require("firebase-admin")

class ContenedorMysql{
    constructor(serviceKey,url, table){
        this.connectToFirebase = () => {
            admin.initializeApp({
                credential: admin.credential.cert(serviceKey),
                databaseURL:url,
            });
        }
        this.connectToFirebase()
        this.db = admin.firestore();
        this.userCollection = db.userCollection(table)
        this.doc = this.userCollection.doc()
        
    }



    async getById(id){
        try {
            const product = await this.userCollection.doc(id);
            if(!product){
                return product
            }
        } catch (error) {
            return {message:`Hubo un error ${error}`, error:true};
        }
    }

    async getAll(){
        try {
            let response =  await this.userCollection.get()
            let results = response.docs.map(doc=>({
                    id:doc.id,
                    data: doc.data()
            }))
            return results;
        } catch (error) {
            return []
        }
    }

    async save(product){
        try {
            let response = await this.doc.create(product)
            if (response) {
                return response
            }
        } catch (error) {
            return {message:`Error al guardar: ${error}`};
        }
    }

    async updateById(body, id){
        try {
            const product = await this.userCollection.doc(id);
            await product.update(body)
            return {message:"Update successfully"}
        } catch (error) {
            return {message:`Error al actualizar: no se encontró el id ${id}`};
        }
    }

    async deleteById(id){
        try {
            const product = await this.userCollection.doc(id);
            await product.delete()
            return {message:"Deleted"}
        } catch (error) {
            return {message:`Error al borrar: no se encontró el id ${id}`};
        }
    }

    async deleteAll(){
        try {
            const product = await this.userCollection.doc();
            await product.delete()
            return {message:"Deleted"}
        } catch (error) {
            return {message:`Error al borrar todo: ${error}`};
        }
    }

}

export {ContenedorMysql}