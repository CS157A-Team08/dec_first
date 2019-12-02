
const express = require('express')
const bodyParser = require('body-parser')
const { restaurant, employee, shiftrecord, customer, itemdetails, menu, order, orderat, payment, setitemdetailsstatus, setorderstatus, topten} = require('./sequelize')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Create a restaurant
app.post('/rest', (req, res) => {
      restaurant.create(req.body)
        .then(user => res.json(user))
})
// create an employee
app.post('/emp', (req, res) => {
employee.create(req.body)
.then(user => res.json(user))
})

// get all restaurant
app.get('/allrest', (req, res) => {
restaurant.findAll().then(restaurant =>
res.json(restaurant))
})

// get all employees
app.get('/allemp', (req, res) => {
employee.findAll().then(employee =>
res.json(employee))
})

// get all menu
app.get('/allmenu', (req, res) => {
  menu.findAll().then(menu =>
  res.json(menu))
})

// get book by  bookId
app.get('/rest/:id', (req, res) => {
restaurant.findOne(
{
where: { storeID: req.params.id, },
}
).then(restaurant => res.json(restaurant))
})

// get author by id
app.get('/emp/:id', (req, res) => {
employee.findOne(
{
where: { employeeID: req.params.id, },
}
).then(employee => res.json(employee))
})

const port = 12000
app.listen(port, () => {console.log(`Running on http://localhost:${port}`)
})
