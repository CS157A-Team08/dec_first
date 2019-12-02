module.exports = (sequelize, type) => {
    return sequelize.define("setitemstatus", {

        orderID: type.INTEGER,
        empID: type.INTEGER,
        time: type.TIME

        
    })
}