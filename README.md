# :newspaper: Paper Scraper (aka Onion Peeler) :trollface:
A `Node.js` &amp; `MongoDB` webapp that web-scrapes news data from [The Onion](http://www.theonion.com/) and allows users to comment about what they have read. Users can also delete unwanted comments.

A Node.js & MongoDB webapp that web-scrapes news data from The Onion and allows users to comment about what they have read. Users can also delete unwanted comments.

Please check out the deployed version in Heroku [here](https://onionrings.herokuapp.com/articles)!

## Functionality
On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `handlebars` for templating each article and `materialize` as a styling framework. The app also uses `jQuery` and `AJAX` to help with making post requests.

And for webscraping, the app uses the `request` and `cheerio` node packages. All webscrapping code can be found in the `controllers.js` file.

## Screenshots
#### The `/articles` route renders all the news articles
![All Articles](/screenshots/content.png)

#### Click on the globe icon to view the content.
![Article Content](/screenshots/article.png)

#### Click the Chat Bubble icon to add a comment via the `/add/comment/:id` post route
![Add Comment](/screenshots/add-comment.png)

#### Click the Thumbs up/down icon to view comments
![View Comment](/screenshots/view-comment.png)

#### Click the Delete button to remove rude comments via the `remove/comment/:id` route
![Delete Comment](/screenshots/delete-comment.png)

#### Note that the web scraping occurs on the `/scrape` route.
#### On visiting the index route, `/`, express redirects to `/scrape` and then `/articles` routes

