# BookIt

An online book store web application. My first project to use React, JavaScript, HTML, CSS, Bootstrap and Moqups

## Functionality

At the home page there are a few books that are featured, this list can be changed when logged in as an administrator. You are able to scroll through the synopsis of each book or click on the image or book title. This will redirect you to a page showcasing that book.

On the more books page, you will be able to see the entire inventory of books. You are able to scroll through the synopsis of each book or click on the image or book title. Much like the home page, clicking on a book image or title will redirect you to a page showcasing that selected book. All data for the books is hard coded and created by me. 

On the admin page you can enter your username and password(admin, admin) and you will be redirected to the homepage. A form will be conditionally rendered for updating books. This form will appear in the home page and on  the more books page. As well, buttons will appear next to each book in the featured section and in the more books page. Clickin on the update button will send all data for that book to the form where you can alter the data for that specific book. Clickin on the 'x' button will remove that book from the featured list. In the more books page any book not featured will have a '+' button, clicking this button will add it to the featured page. On this page you are able to update a book as well. When done, you can log out.

## Challenges

1. Getting a books information to populate in the update form.
2. 

## Solutions

1. I created an item in state, if it's no longer null, it will trigger a lifecycle method (componentWillReceiveProps) in the form component. The method will recieve a book object and set state on the form component with all the properties of that book. 

## Success

I saved time by creating wireframes on Moqups. Testing my code frequently sped up my debugging.

## What I would do differently

Being my first project in React, I had planned on adding more functionality to my site initially, a shopping cart and a login page. I quickly realized that I would not be able to implement everything. What I would do differently is, I would be more realistic on what features I can actually implement in the time given.


## Demo
![](src/images/bookIt.gif)
