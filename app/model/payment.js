module.exports = (sequelize, type) => {
    return sequelize.define("payment", {
        paymentID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        customerID: type.INTEGER,
        orderID: type.INTEGER,
        time: type.TIME,
        cardNO: type.BIGINT,
        amount: type.FLOAT,
        change: type.FLOAT,
        tips: type.FLOAT
        
    })
}