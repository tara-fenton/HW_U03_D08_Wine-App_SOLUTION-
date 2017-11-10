# HOMEWORK: [name of homework]

![Time for wine!](https://i.giphy.com/536KIvytx4AO4.gif)


# React Wines
Tonight we're going to build a simple React app using around newly acquired Axios skills. For our data, we'll be using the wine api from [the handy API generator](http://myapi-profstream.herokuapp.com/).

## Set Up

No files are provided. Create a new react app. Also set up your wine API:

* Navigate to `myapi-profstream.herokuapp.com`
* Create a new account
* Create a new instance of a wine API
* Seed the API with data
* Test out this API using postman to see what kind of data you can get back - save the link to your API somewhere
* Your wine app will have `CR` functionality -- we aren't going to worry about editing and deleting yet.


## Assignment

Build a Wine Management app!  Your app should have:

- **A Side Bar Navigation:** The navigation should include buttons that will change what is rendered in the viewing window. It should have buttons to view each individual wine, a `View All` button, and a `Create Wine` button.
- **A Viewing Window:** The view should change based off of what the user has clicked. There are 3 possible views that can be rendered:
    - **A Wine List View:** This view should render when a user clicks `View All` in the navigation. It should render a list of all of the wines. This should be the initial view rendered when your app is loaded. Think about where you should store the wines and when you should make the call to retrieve them!
    - **A Wine View:** Whenever the user clicks on a specific wine the viewing window should re-render showing only information for that specific wine. 
    - **A Wine Form View:** When the user clicks on `Create Wine` the view should render a form to create a wine. When the form is submitted, send a `post` request to your API to add it to your database. When you receive a response, add it to the list of wines stored in state and render the _Wine View_ for the new wine.

### Your app should [follow the wireframes!](./wireframes.md)

### Bonus - Delete Wine

On the _Wine View_ add a button to delete the wine. 

### Super Bonus - Edit Wine

In the _Wine View_ add a button that will render the _Wine Form_ with the values referencing selected wine. The form should also now do `put` request to your API to edit the wine's values.


## 🚀 Completion looks like:

[all the steps they have to follow]

## 🚀 Your homework submission should include:

- A pull request created on _this repo_.
- [any additional steps]
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 11PM ON [night] 🚨