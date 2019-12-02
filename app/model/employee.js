module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        empID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        phone: type.INTEGER,
        phone:type.BIGINT,
        position: type.STRING,
        password: type.STRING,
    })
}