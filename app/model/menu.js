module.exports = (sequelize, type) => {
    return sequelize.define('menu', {
        itemID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        decription: type.STRING,
        category: type.STRING,
        price:type.FLOAT,
        Photo: type.STRING
        
    })
}