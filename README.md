# Swag-Labs
JavaScript Swag Labs Website Testing Project

Project Description

This project aims to test the functionality of the Swag Labs website. Testing will be performed using JavaScript and Selenium WebDriver.
It is planed to verify the key features of the site to ensure all elements function correctly and meet expectations. The tests will cover scenarios for login functionality, shopping cart operations, and user interface interactions.

Tools and Technologies:

- JavaScript for writing tests.
- Mocha as the testing framework.
- Chai for assertions.
- Selenium WebDriver for browser automation.

Test Cases

Login.

Positive Test:
-Log in with valid credentials (standard_user and secret_sauce).
-Verify that the user is redirected to the product page (inventory.html).

Negative Test:
-Attempt to log in without entering a username.
-Expected error message: Epic sadface: Username is required.

Product Interaction.

Adding a product to the cart:
-Click the "Add to cart" button for any product.
-Verify that the cart icon reflects the updated number of items.

Removing a product from the cart:
-Click the "Remove" button after adding a product.
-Verify that the product is removed from the cart.

Navigation.

Sidebar Menu:
-Open the sidebar menu.
-Verify that links such as "All Items," "About," "Logout," and "Reset App State" are displayed.

Logout:
Click the "Logout" link in the menu.
Verify that the user is redirected to the login page.

Product Display Validation:
-Ensure all product cards, including images, prices, and descriptions, are displayed correctly on the product page.
