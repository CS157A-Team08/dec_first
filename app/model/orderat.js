module.exports = (sequelize, type) => {
    return sequelize.define("orderat", {

        orderID: type.INTEGER,
        storeID: type.INTEGER,

        
    })
}