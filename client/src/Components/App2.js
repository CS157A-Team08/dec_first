import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Categories from './Categories';
import { Header, Footer } from './Layouts/index'; 
import { foodItems, positions } from '../store.js';


export default class AppPage extends Component {
    state = {
        food_category: 'Beef',
        posIndex: 0,
        employees: [],
        employee: {},
        restaurants: [],
        restaurant: {}
    }

    componentDidMount() {
        this.fetchRestaurants();
        this.fetchEmployees();
    }

    fetchEmployees = () => {
        axios
            .get('http://localhost:12000/allemp')
            .then( response => {
                this.setState({ employees:response.data });
                this.setState({employee:this.state.employees[0]});
            })
            .catch( error => {
                console.log("DEBUG MSG - fetchEmployees failed error:" + error);
                this.setState({employees:[{name:"ErrEmployee1", employeeID:1, position:"Chef", phone:"(123) 456-7890"},
                                          {name:"ErrEmployee2", employeeID:2, position:"Hostess", phone:"(123) 456-7890"},
                                          {name:"ErrEmployee3", employeeID:3, position:"Server", phone:"(123) 456-7890"}]});
                this.setState({employee:this.state.employees[0]});
            });
    }

    setCurrentEmp = (employeeID) => {
        axios
            .get("http://localhost:12000/emp/" + employeeID)
            .then( response => {
                this.setState({ employee:response.data });
            })
            .catch( error => {
                console.log(error);
                const temp = this.state.employees[employeeID-1];
                this.setState({employee:temp});
            });
    }

    fetchRestaurants = () => {
        axios
            .get('http://localhost:12000/allrest')
            .then( response => {
                this.setState({ restaurants:response.data });
                this.setState({ restaurant:this.state.restaurants[0] });
            })
            .catch( error => {
                console.log(error);
            });
    }

    setCurrentRest = (storeID) => {
        axios
            .get("http://localhost:12000/rest/" + storeID)
            .then( response => {
                this.setState({ restaurant:response.data });
            })
            .catch( error => {
                console.log(error);
            });
    }

    //method to get foodItems based on their category
    getItemsByCategories() {
        return Object.entries(
            this.state.foodItems.reduce((foodItems, item) => {
                const { food_categories } = item

                foodItems[food_categories] = foodItems[food_categories]
                    ? [...foodItems[food_categories], item]
                    : [item]

                return foodItems    
            }, {})
        )
    }

    handleCategorySelected = food_categories => {
        this.setState(
            {food_category: food_categories}
        )
    }

    handlePositionChosen = index => {
        this.setState(
            { posIndex: index }
        )
    }

    render() {
        //const foodItems = this.getItemsByCategories()
        const {food_category} = this.state;
        const {posIndex} = this.state;
        const {restaurant} = this.state;
        const {restaurants} = this.state;
        const {employee} = this.state;
        const {employees} = this.state;

        return <Fragment>
            <Header
                currRestaurant = { restaurant }
                onSelectCat = { this.handleCategorySelected }
                positions = { positions }
                posIndex = { posIndex }
                onSelectPos = { this.handlePositionChosen }
            />
            <Categories
                foodItems={foodItems}
                food_category={food_category}
                posIndex = { posIndex }
                restaurants = { restaurants }
                employees = { employees }
                employee = { employee }
                onSelectRest = { this.setCurrentRest }
                onSelectEmp = { this.setCurrentEmp }
            />
            <Footer />
        </Fragment>
    }
}
