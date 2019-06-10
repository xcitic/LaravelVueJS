<p align="center">
  Laravel and VueJS starter kit. Includes Authentication with Passport JWT Token, Login & registration views and a clean dashboard design.
</p>

<p align="center">
  <a href="https://github.com/laravel/laravel">
    <img src="https://img.shields.io/badge/Laravel-5.8-brightgreen.svg" alt="laravel">
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/xcitic/LaravelVueJS/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## Introduction

[LaravelVueJS](https://github.com/xcitic/LaravelVueJS) a starter kit to get jumpstarted on making whatever your making. Most of the sites I've built all have some sort of authentication strategy, signup & registration and either an admin dashboard and/or a client dashboard.
</br>
Uses [Laravel](https://laravel.com) as backend and [VueJS](https://github.com/vuejs/vue) as frontend.
Authorization is handled by Passport with JWT token.

Don't wast too much time setting up the initial stack.
Get up and running in minutes with

Plug right into your API and build features.

# Frontend
VueJS Frontend with Vuex statemanagement, Vuerouter and Vuetify design kit.
# Backend
PHP Laravel Backend with Passport Local authentication, API routes, user migrations and postgreSQL database.



- [Preview](https://laravelvuejs.samilazreg.com)

- [Documentation] Coming soon.

## Preparation

Local Project requirements are: Having installed [composer](https://getcomposer.org), [node](https://nodejs.org/) and [git](https://git-scm.com/).


## Features

```
# Application Features
- Laravel backend for DB queries, API and ORM
- Passport for JWT authentication.
- VueJS Single Page Application Setup
- Webpack for build services
- VueRouter for clientside routing
- Vuex for statemanagement
- Vuetify for UI library
- ElementUI for Dashboard library

# Views
- Landing
- Login
- Register
- Products
- Dashboard


- Authentication
  - Laravel Passport to handle JWT token issuing and checking.
  - API Middleware to intercept and check JWT token.
  - Clientside Router authentication check on routes that require authentication.

- Build system
  - Webpack with versioning.
    - Browsersync in the webpack pipe to auto refresh browser on code changes.

```

## Setting up the project

```bash
# clone the project
git clone https://github.com/xcitic/LaravelVueJS.git

# enter the project directory
cd LaravelVueJS

# install backend dependencies
composer install

# install frontend dependencies
# using npm (choose either npm or yarn, don't mix the two. Dangerous cocktail)
npm install

# using yarn
yarn install

# Setting up environment variables
cp .env-example .env

# Setup a local sqlite database
touch database/database.sqlite

# Make salt key for laravel
php artisan key:generate

# Migrate database
php artisan migrate

# Generate key-pair for Passport
php artisan passport:install

# Start backend services listning on port 8000
php artisan serve --port 8000

# Start frontend services
npm run watch

##### PROJECT IS RUNNING ON #####
      http://localhost:8000
```


## License

[MIT](https://github.com/xcitic/LaravelVueJS/blob/master/LICENSE)

CopyFree (c) 2019 [Sami T. Lazreg](https://samilazreg.com)
