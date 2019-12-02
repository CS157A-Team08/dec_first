module.exports = (sequelize, type) => {
    return sequelize.define("setitemstatus", {

        detailsID: type.INTEGER,
        empID: type.INTEGER,
        time: type.TIME

        
    })
}