module.exports = (sequelize, type) => {
    return sequelize.define("order", {
        orderID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: type.FLOAT,
        time: type.TIME,
        orderstatus: type.STRING,
        customerID: type.INTEGER
        
    })
}