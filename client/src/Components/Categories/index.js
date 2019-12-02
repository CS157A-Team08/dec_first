import React, { Fragment, useState } from 'react';
import {Grid, Paper, Typography, IconButton, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import 'typeface-roboto';
import GridList from '@material-ui/core/GridList';
import { mergeClasses } from '@material-ui/styles';


const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export default ({foodItems, food_category, posIndex, restaurants, employees, employee, onSelectRest, onSelectEmp}) =>

    {
        const [shoppingCart, setCart] = useState([]);
        // state = {
        //     shoppingCart: [{name:"Galbi"},{name:"Trash"}]
        // }

        const handleCartAdd = item => {
            setCart(shoppingCart => [...shoppingCart, item]);
            console.log("DEBUG MSG: calling handleCartAdd for item: " + item.name);
        };

        const handleRestClicked = storeID => {
            onSelectRest(storeID);
            console.log("DEBUG MSG - calling handleRestClicked, storeID: " + storeID);
        }

        const handleEmpClicked = empID => {
            onSelectEmp(empID);
            console.log("DEBUG MSG - calling handleEmpClicked, empID: " + empID);
        }

        // Customer page (Menu)
        if(posIndex === 0) {
            return (
                <Fragment>
                    <Typography variant="h1">
                        {food_category}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <div className={mergeClasses.root}>
                                <GridList
                                    className={mergeClasses.gridList}
                                    cols={4} >

                                    {foodItems.map( ( foodItem ) =>
                                        { if (foodItem.food_category === food_category) {
                                            return <Typography >
                                                        <Paper style={styles.Paper}>
                                                            {foodItem.name}
                                                            <div/>
                                                            {foodItem.description}
                                                            <div/>
                                                            <IconButton
                                                                size="small"
                                                                color="secondary"
                                                                aria-label="add"
                                                                onClick={() => { handleCartAdd(foodItem); }}>
                                                                <AddIcon />
                                                            </IconButton>
                                                        </Paper>
                                                    </Typography>
                                            }
                                        }   
                                    )}
                                </GridList>
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper style={styles.Paper}>
                                Shopping Cart
                                <div/>
                                {shoppingCart.map( ( item ) => 
                                    { return <ul>
                                                {item.name}
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ul>
                                    }
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Fragment>
            )
        }
        // Staff Page
        else if( posIndex === 1 ) {
            return (
                <Fragment>
                    <Typography variant="h2">
                        Current Staff
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <div className={mergeClasses.root}>
                                <GridList
                                    className={mergeClasses.gridList}
                                    cols={1} >

                                    {employees.map( ( emp ) => {
                                            return <Button onClick={() => { handleEmpClicked(emp.employeeID) }}>
                                                        <Typography >
                                                            <Paper style={styles.Paper}>
                                                                {emp.name}
                                                            </Paper>
                                                        </Typography>
                                                    </Button>
                                        }
                                    )}

                                </GridList>
                            </div>
                        </Grid>

                        <Grid item xs>
                            <Paper style={styles.Paper}>
                                <Typography variant="h6">
                                    Employee Bio
                                </Typography>
                                <div/>
                                {employee.name}
                                <div/>
                                {employee.position}
                                <div/>
                                {employee.phone}
                            </Paper>
                        </Grid>
                    </Grid>
                </Fragment>
            )
        }
        // Admin Page
        else {
            return (
                <Grid>
                    <Typography variant="h2">
                        Available Restaurants
                    </Typography>
                    <GridList
                        className={mergeClasses.gridList}
                        cols={3} >

                        {restaurants.map( ( rest ) => {
                            return <Button onClick={() => { handleRestClicked(rest.storeID); }}>
                                        <Typography >
                                            <Paper style={styles.Paper}>
                                                {rest.name}
                                            </Paper>
                                        </Typography>
                                    </Button>
                            }   
                        )}

                    </GridList>
                </Grid>
            )
        }
    }