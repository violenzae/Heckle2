# Heckle.

#### _Team Week Project - 2/21/2020_

#### _By Alyssa Colistro, Mariam Alaeddin, Rachel Schieferstein, and Jonathan Carlos_

## **Description**

_This application will make API requests to google maps in order to pinpoint an exact location using longitude and latitude. By doing so, user's will be able to, at anytime, click a location and be prompted to enter fields of information. For the purposes of this app, the infomation will consist of instances during which someone is being heckled._

## Preview
<img src="./img/landing.png">

## **Behavior Driven Development**

| Behavior | Input | Output |
|----------|:-----:|--------|
| User clicks on the google map provided. | 'click' | A pinpoint is displayed on the map. |
| User enters information on the heckle incident in a comment box. | "string of information" | "entered string of information." |
| User clicks "Submit." | 'click' | The map location is displayed with the incident information. |
| Multiple users submit incidents. | 'click click click' | The map shown displays multiple incidents. |
| User searches for safe spaces through location. | 'city or zip code' | A list of safe places nearby is displayed with a modal. |

## **Setup/Installation**

*Option One:*
1. Open up your terminal.
2. Navigate to the desired directory in which you want to clone this repository.
3. Use `git clone https://github.com/acolistro/Heckle2` to clone this repository.
4. Open the repository.
5. Install all dependencies using `$ npm install` in your terminal.
6. Use `$ npm run build` to start a package bundle.
7. Navigate to `https://developers.google.com/maps/documentation/javascript/get-api-key` for instructions on how to generate your personal API key.
8. On line 336 in the index.html file within the src directory, insert your personal API key in the `KEYHERE` section.
9. Drag the html file into your broswer or use `$ npm run start` in your terminal for a live server.
10. Click a spot on the map.
11. Enter information on your experience.
12. Click "Enter!"

## **Known Bugs**

No known bugs at this time.

## **Support and contact details**

If you have any questions, comments, or concerns, feel free to contact the content creator at violenza@gmail.com. 

## **Technologies used**
* REFUGE Restrooms API

* Google Maps API

* Webpack

* JavaScript 

* jQuery 3.4.1

* HTML 5

* CSS

* Bootstrap 4.4.1

* Visual Studio Code

* GitBash

## **License**

Copyright (c) 2020 **_Heckle._**

This software is licensed under the MIT license.
