# Museumary

Trenton Strahan, Maxwell West, Joshua Morris,   
Kelly Nguyen, Kenny Le

---

## Introductions

+++

### Trenton Strahan
* About Me
    * Houston sports is everything to me
    * Astros 4 lyfe
    * Rockets 4 lyfe
* Project Responsibilites
    * Front-end design
    * Data visualization
    * Pagination

+++

### Max West
* About Me
    * I have a cat named Richard
    * I enjoy long walks on the beach
    * I like reading and I'm getting a minor in history
    * I like movies and Amazon™
* Project Responsibilities
    * Front-end React Captain

+++

### Josh Morris
* About Me
    * Fourth-year CS major
    * I enjoy Mexican food, being active, and playing Rocket League™
    * Rocket League please sponsor me
* Project Responsibilities
    * Worked with the back-end team
    * Data visualization
    * Unit testing

+++

### Kelly Nguyen
* About Me
    * I am a loving mother to my many cats and my dog, Bear
    * They are my only hobby because I don't have time for anything else
    * I also like Tom Hanks and sushi
* Project Responsibilities
    * Writing and documenting the RESTful API
    * Setting up and filling the database
    * Implementing search on the backend

+++

### Kenny Le
* About Me
    * I like to watch League at 5 AM
    * I live in the basement lab
    * I like fruit snacks
* Project Responsibilities
    * Front-end react
    * Pagination, refactoring, filtering, sorting

---

## Demonstration
Navigate, 
Search, 
Unit Tests

---

## Self Critique

+++

### What did we do well?
* We did a good job delegating tasks to be done and getting things done in a timely manner
* Our code is well organized and well documented
* We have a lot of content about more obscure artists
    * Gotta help out the starving artist
* The real art was the friends we made along the way

+++

### What did we learn?
* What a web application is comprised of in terms of front-end and back-end and how the two interact with each other
* What a RESTful API is and how to write one
* How to define database models, set up a Postgres database, and manipulate it using SQL and an ORM like SQLAlchemy
* How to use Javascript and React

+++

### What can we do better?
* Search
    * Our search time outs for queries with too many results because it does the whole query at once (i.e. query="drawing")
* Mobile Site
    * Hamburger menu doesn't work
    * On desktop when the window is resized, mobile settings are applied and the paging buttons move to the middle of the screen

+++

### (continued)
* Data
    * There weren't many good RESTful API sources for our topic
    * We have limited data on artists and not many well-known artists since our source APIs are limited to the works contained in a specific museum
    * Artists don't have data on all their works, only the works in the museums we scraped
    * We have data on only five museums

+++

### (continued)
* Caching
    * Currently our site is constantly making API requests when the page is changed. If we implemented caching on the front-end, then all we would have to do is modify the displayed data upon a page change which would speed things up

+++

### What puzzles us?
* Search
    * How to search across multiple tables and have the combined results sorted by relevancy (Our method was kind of hacky)
* Some aspects of using Selenium to test our GUI were confusing
* Figuring out how to deploy multiple apps to our GCP project was difficult and confusing
* Javascript is hard :(

---

## Critique of
## endangered-animals

+++

### What did they do well?
* Search results appear very quickly in real time on the model pages
* Models are rich in information and have good relationships to the other main models
* The site is very responsive when it comes to filtering and sorting and it loads quickly in general

+++

### What did we learn from their website?
* Save the animals!!!
* React-bootstrap-table is cool
    * Search, filtering, and sorting
* The threat with the highest severity is the abstraction of ground water for agricultural use

+++

### What can they do better?
* Model Pages
    * Too much data is shown on the model page with multiple instances
    * We think it should be more condensed and expanded upon in the individual instance page, or be formatted so that information does not run off the screen
    * Some images are cut off in the page with multiple models

+++

### Continued
* Filtering and Search
    * It seems a little bit overkill to have a general search as well as search functions for every attribute of every model
    * It would be nice to be able to search multiple models at once rather than one at a time

+++

### What puzzles us about their website?
* We couldn't figure out how their API worked because there was no API files in their GitHub. After reading their technical report, it looks like there is an additional "back-end" folder not included in the public repo
* They have so many JS files, it was hard to understand how their app was structured and their GitHub organization was unclear

---

## Visualization

