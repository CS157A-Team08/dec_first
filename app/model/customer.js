module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        customerID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        phone: type.BIGINT,
        
    })
}