# HOMEWORK: WINE TIME

![Time for wine!](https://i.giphy.com/536KIvytx4AO4.gif)


# React Wines
Tonight we're going to build a simple React app.
 **Before you begin!** Read the React [Router Docs](https://reacttraining.com/react-router/web/guides/quick-start) 

## Set Up

No files are provided. Create a new rsact app on top of an Express Api:

* Your `wine_db` should have a `wines` table
* Your table should have the bellow columns: id, name, year, grapes, country, region, description, picture (this will be a url to the wine's picture ex: http://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg), and price


## Assignment

Build a Wine Management app!  Your app should have:

- **A Side Bar Navigation:** The navigation should include buttons that will change what is rendered in the viewing window. It should have buttons to view each individual wine, a `View All` button, and a `Add Wine` button.
- **A Viewing Window:** The view should change based off of what the user has clicked. There are 3 possible views that can be rendered:
    - **A Wine List View:** This view should render when a user clicks `View All` in the navigation. It should render a list of all of the wines. This should be the initial view rendered when your app is loaded. Think about where you should store the wines and when you should make the call to retrieve them!
    - **A Wine View:** Whenever the user clicks on a specific wine the viewing window should re-render showing only information for that specific wine. 
    - **A Wine Add View:** When the user clicks on `Add Wine` the view should render a form to create a wine. When the form is submitted, send a `post` request to your API to add it to your database. When you receive a response, add it to the list of wines stored in state and render the _Wine View_ for the new wine.
    - **A Wine Edit View:** In the _Wine View_ add a `Edit` button that will render a _Wine Edit_ with the prepopulated values referencing selected wine. The form should do a `put` request to your API to edit the wine's values.
    - **Add Delete Functionality:** On the _Wine View_ add a button to delete the wine.

### Your app should [follow the wireframes!](./wireframes.md)

### Bonus - 
 - Add a new view that pulls in wines from this API and displays the picture and name:
 http://myapi-profstream.herokuapp.com/api/59ad24/wines/

 - Add a "wine detail" view that displays all of the other wine attributes


## 🚀 Completion looks like:

- You have a React app in this directory with full CRUD
- You have a **good commit history**!! A good commit history is required for this homework.

## 🚀 Your homework submission should include:

- A pull request created on _this repo_.
- A **good commit history**
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 11PM ON SUNDAY NIGHT 🚨