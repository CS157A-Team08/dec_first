module.exports = (sequelize, type) => {
    return sequelize.define('restauant', {
        storeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        address: type.STRING,
        phone:type.INTEGER
    })
}