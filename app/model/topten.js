module.exports = (sequelize, type) => {
    return sequelize.define("topten", {

        itemID: type.INTEGER,
        rank: type.INTEGER,
        
    })
}