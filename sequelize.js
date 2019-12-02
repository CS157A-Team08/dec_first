const Sequelize = require('sequelize')
const restaurantModel = require('./app/model/restaurant')
const employeeModel = require('./app/model/employee')
const shiftrecordModel = require('./app/model/shiftrecord')
const customerModel = require('./app/model/customer')
const itemdetailsModel = require('./app/model/itemdetails')
const menuModel = require('./app/model/menu')
const orderModel = require('./app/model/order')
const orderatModel = require('./app/model/orderat')
const paymentModel = require('./app/model/payment')
const setitemdetailsstatusModel = require('./app/model/setitemdetailsstatus')
const setorderstatusModel = require('./app/model/setorderstatus')
const toptenModel = require('./app/model/topten')
const {DATABASE_NAME,USERNAME,PASSWORD,HOST,DIALECT} =require('./constants')
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
host: HOST,
dialect: DIALECT,
pool: {
max: 10,
min: 0,
acquire: 30000,
idle: 10000
}
})
const restaurant = restaurantModel(sequelize, Sequelize)
const employee = employeeModel(sequelize, Sequelize)
const shiftrecord = shiftrecordModel(sequelize, Sequelize)
const customer=customerModel(sequelize, Sequelize)
const itemdetails=itemdetailsModel(sequelize, Sequelize)
const menu=menuModel(sequelize, Sequelize)
const order=orderModel(sequelize, Sequelize)
const orderat=orderatModel(sequelize, Sequelize)
const payment=paymentModel(sequelize, Sequelize)
const setitemdetailsstatus=setitemdetailsstatusModel(sequelize, Sequelize)
const setorderstatus=setorderstatusModel(sequelize, Sequelize)
const topten=toptenModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
console.log(`Database & tables created here!`)
})
module.exports = {
restaurant,
employee,
shiftrecord,customer,
itemdetails,
menu,
order,
orderat,
payment,
setitemdetailsstatus,
setorderstatus,
topten


}