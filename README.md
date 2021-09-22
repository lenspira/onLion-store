# onLion eCommerce Platform
> An e-commerce store built with React, Node.js, and MongoDB.

# Features
* Shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search
* User profile with orders
* Admin product management (create, edit, delete)
* Admin user management (edit, delete)
* Admin order details page
* Mark orders as delivered option
* Checkout process (shipping, payment method, etc.)
* PayPal / credit card integration
* Database seeder (products & users)

# Known Issues
* After a customer buys a product, the stock of that product does not get updated in the database, nor in the admin product management section.

# Usage
## ES Modules in Node
This project uses ECMAScript Modules in the backend. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

## Environment Variables
Create a .env file in then root and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install dependencies
```
# Install back-end dependencies in root folder
npm install
# Install front-end dependencies in front-end folder
cd frontend
npm install
```

## Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

## Build & Deploy
```
# Create frontend prod build
cd frontend
npm run build
```
There is a Heroku postbuild script included, so if you are deploying to Heroku, there will be no need to build manually.

## Seed Database
You can use the following commands to seed the database with some sample users and products, as well as remove all data:
```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
```
# Sample user logins
Sample User Logins

admin@onlion.com (Admin)
admin2664

jroberts@example.com (Customer)
123456

asmith@example.com (Customer)
123456
```

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Links
* Project homepage: https://onlionstore.herokuapp.com/
* Repository: https://github.com/lenspira/onLion-store
* Issue tracker: https://github.com/lenspira/onLion-store/issues

## License
The code in this project is licensed under MIT license.

Copyright (c) 2021 Leonard DeMarco.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
