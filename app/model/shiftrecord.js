module.exports = (sequelize, type) => {
    return sequelize.define('shiftrecord', {
        shiftID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startShiftTime: type.TIME,
        endShiftTime: type.TIME,
        storeID:type.INTEGER,
        empID:type.INTEGER
    })
}