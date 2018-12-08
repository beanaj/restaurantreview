# Restaurant Review Site

## Introduction
This is a website that shows restaurant reviews for restaurants displayed on a map in
New York City. It is designed to work across a range of devices, and is specifically 
optimized for these viewport and devices:

* iPhone 8 Plus at 414 x 736

* iPad 9.7" at 768 x 1024

* Desktop at 1920 x 1080
## Instructions to Run

To run the project, make sure you have Python installed.

##### To install Python using HomeBrew:
```
brew install python
```

##### To run the webserver, within the project directory run this command in the in the terminal:

```
python -m SimpleHTTPServer 8000
```

##### To view the site:

http://localhost:8000/



## Dependencies
This project relies on MapBox to render the map used on the site. It uses Leaflet CSS to 
show details on the map.

Leaflet CSS depends on the Map variable in the JS to be of type var. If you change it to let or const
the map will no longer render.
## Attributions
Base code was provided by Udacity, and forked from this repository:

https://github.com/udacity/mws-restaurant-stage-1

Service Worker tutorial used found here:

https://developers.google.com/web/fundamentals/primers/service-workers/



