const collectionName = "suppliers";

function getSuppliersModel(){
    return{
        name: "",
        contact: "",
        address: "",
        email: ""
    }
}

module.exports = {
    collectionName,
    getSuppliersModel
}