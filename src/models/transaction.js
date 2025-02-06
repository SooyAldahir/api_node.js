const collectionName = "trasaction";

function getTransactionModel(){
    return{
        type: "",
        date: new Date(),
        product_id: "",
        count: 0,
        user_id: "",
        notes: ""
    }
}

module.exports = {
    collectionName,
    getTransactionModel
}