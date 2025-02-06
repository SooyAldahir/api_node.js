const collectionName = "category";

function getCategoryModel(){
    return{
        name: "",
        description: ""
    }
}

module.exports = {
    collectionName,
    getCategoryModel
}