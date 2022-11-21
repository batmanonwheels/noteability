# Noteability, The Name the Song Game
<img width="1512" alt="Screen Shot 2022-09-05 at 2 58 17 PM" src="https://www.geekyhobbies.com/wp-content/uploads/2017/05/Noteability-Box.jpg.webp">

Noteability is a game that allows you to play a song on a virtual(or physical) piano and have your friends guess the name of it. 

It's inspired by but not related to TIGER Games' game of the same name.

"Introduced in 1990, Noteability is a "guess the music title" trivia game. The game's gimmick--a plastic grand piano that actually plays a tune--is also key in game play. The piano keys are marked with numbers, which correspond to number sequences given on the trivia cards. Most reviews indicate that the method works as long as the player gets the timing correct. Apparently, newer versions don't exist and players complain that the songs used in the game are all old standards. Name that tune!" - The Strong National Museum of Play

> Check out the live frontend [_here_](https://syntesthesium.herokuapp.com/). -->

<!-- ## Table of Contents
* [General Info](#general-information)
* [GitHub Repo](#github-repos)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)

## General Information
This project, part of Flatiron Software Engineering track, focused oncreating a fullstack app using all the knowledge we gained over the course of the program. This is my capstone!

## GitHub Repo
- [github](https://github.com/batmanonwheels/flatiron-capstone-project)


## Technologies Used
### Backend Server
- Ruby ~> version 2.7.4
- Rails ~> version 7.0.3
- Bycrypt ~> version 3.1.7
- Postgresql ~> version 12.11
- Spotfiy API

### Frontend Server
- React ^18.2.0
- React-Router-Dom ^6.3
- React-Player ^2.10.1
- chakra-ui/react": ^2.2.8,

## Features
### Backend MAIN API Endpoints
| Method | Endpoint | Params | Description |
| --- |----- | ------ | ------|
| GET | /me |  | returns current session user 
| POST | /login |  | creates a new session for an existing user
| DELETE | /logout|  | logs the current user out
| GET | /other |  | returns user associated with username
|  | | username | 
| POST | /signup |  | creates a new user
|  | |username | 
|  | |password | encrypted in the backend
| DELETE | /users/:id |  | deletes the user
| GET | /posts |  | returs all posts
| GET | /posts/:id |  | returns a specific post
| GET | /show_top |  | returns the top three rated posts
| POST |  /posts |  | creates a new post
|  | |title | post title
|  | |video | video file stored by active storage
|  | |user_id | user associated with the post
|  | |description | post description
| PATCH | /posts/:id |  | updates a post
|  | |title | post title
|  | |video | video file stored by active storage
|  | |user_id | user associated with the post
|  | |description | post description
| DELETE | /posts/:id |  | deletes the post
| GET | /comments/:id |  | returs specific comment
| POST |  /comments |  | creates a new comment
|  | |text | comment text
|  | |user_id | user associated with the post
|  | |post_id | post associated with the post
| PATCH | /comments/:id |  | updates a comments text
|  | |text | comment text
| DELETE | /comments/:id |  | deletes the post
| POST | /follow |  | user follows another user to see their posts
|  | |follower_id | id of user following another user
|  | |followee_id | id of user being followed
| DELETE | /follow |  | user unfollows
|  | |follower_id | id of user following another user
|  | |followee_id | id of user being followed 

## Setup
Take the following steps to set up the servers in a development environment
- Fork the project into your local machine [repo](https://github.com/batmanonwheels/flatiron-capstone-project)
- Ensure postgres is insalled locally 
### Backend
- `bundle install`
- Sign into the spotify developer dashboard[here](https://developer.spotify.com/dashboard/login) and create an app. For more info regarding the Spotify API, refer to the [docs](https://developer.spotify.com/documentation/web-api/)`
- Retrieve your client ID and SECRET and put it in ENV variables, alongside your redirect URL (make sure the variable names are CLIENT_ID, CLIENT_SECRET, and REDIRECT_URL) in the config/application.yml file.
- NOTE: PLEASE MAKE SURE THAT THE FILE IS BEING IGNORED BY GIT, as this data is very sensitive.
- `rails db:create`
- `rails db:migrate`
- `sudo service postgresql start`
- `rails s`
- Backend server will now be running on [http://localhost:3000](http://localhost:3000)

### Frontend
- `npm install --prefix client`
- `npm start -- prefix client`
- Frontend server will now be running on [http://localhost:4000/](http://localhost:4000/)


## Usage

1. Login by connecting your Spotify account to the app.
2. The homepage shows your recently played tracks. You can also browse your recently saved albums. 
3. You can check your profile to view your favorited tracks, and write reviews for them as well.
<img width="1512" alt="Screen Shot 2022-09-05 at 2 59 33 PM" src="https://user-images.githubusercontent.com/5254749/188505379-8400146b-ca79-4c9c-8a3b-812a20b70df6.png">
4. View recent reviews, and like/comment on them to give feedback!
 -->
 
## Project Status
- Project is: _under construction!_.
