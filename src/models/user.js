const collectionName = "users";

function getUserModel(){
    return{
        name: "",
        rol: "",
        email: "",
        phone: ""
    }
}

module.exports = {
    collectionName,
    getUserModel
}