module.exports = (sequelize, type) => {
    return sequelize.define('itemdetails', {
        detailsID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderID: type.INTEGER,
        itemeID: type.INTEGER,
        qantity: type.INTEGER,
        request: type.STRING
        
    })
}