# Project Components

Live application: <http://michaelb167.github.io/climb-buddy-front-end/>

Back end repository: <https://github.com/MichaelB167/climb-buddy-back-end>

## App Explanation

There are countless awesome apps out there for tracking the results of more
generalized workouts and some good ones for specific activies, but as far as
I've found, very few to none for rock climbing.  So, I decided to make one.

This web app is an indoor climbing training resource for identifying difficult
movements and improving at executing them.  Users can input the
results of their climbing sessions by adding the gym they climbed in and traits
of climbs they fell on.  They can then see a list of these
climbs to pick out trends that they can work on improving.  If they want
personalized training suggestions, they can request to see the holds that they
fall on most frequently along with advice on how to target muscle
groups that are required for more efficient use of those holds.

## Technologies Used

This app was created using the following:

Front End: Javascript, HTML/CSS/SASS, Bootstrap, Handlebars.js

Back End: Ruby on Rails

## Approach Taken

I closely followed the suggested steps outlined in the project repository.  More
specifically, I started by mapping out my wireframes and entity relationship
diagram to determine how my web app could best recieve and render data.  I could
have attached a gym name attribute to my climbs table but decided to make a
separate table for gyms, mostly because climb difficulties vary wildly by
gym/location but also because I wanted to challenge myself and better
understand the nuances of working with nested routes.  Ulimately I decided that
building models/migrations with one-to-many relationships users/gyms,
users/climbs, and gyms/climbs made the most sense given the aforementioned
considerations and the user stories I developed.

Prior to working on the front end I ensured that I had curl scripts working for
all required CRUD actions.  This helped me not only ensure that my back end was
functioning as desired but also better understand how to diagnose problems that
arose while working in the front end.

I used a combination of JavaScript, jQuery and AJAX to interact with the server
and render user data in the browser.  To provide security for the user, I
required that all interactions be authenticated and that the user would only be
able to interact with data that they provided.

I knew I wanted to have a feature that displayed personalized training
suggestions since as a user myself I've been unable to find a climbing-specific
app that provides such a service and to me it's one of the more interesting
potential applications of the data.  However, I reminded myself to table that
feature until the core requirements for the app's functionality were met.

In an effort to maintain modularity in my code I limited index files to
containing requirements rather than code as well as created separate directories
for files such as AJAX requests and event handlers.  To backup and track my
project, I made frequent and descriptive commits to my project repository.

## Unsolved Problems

1.  Climbs don't currently save or display with a gym ID attached. I didn't
realize that my routes weren't nested for a while and have now fixed
almost everything to function with nested routes other than patch but didn't
get it quite ready to demo.
1.  Container divs for each climb need to be responsive; if a note is too long
it causes problems with the display.
1.  Completing the bonus training feature (the most common hold among among the
users' falls is displayed).  I briefly considered displaying the results of a
SQL query for that data but as far as I know queries cannot be user dynamic and
I wasn't sure how to update the user ID filter in each users' query.  I can get
all climbs and return the most common string of an array but need to convert
the JSON into an array of climbing hold strings to operate on that array.

## User Stories

1.  As a user, I want to be able to sign up and sign in so that I have a unique
account.
1.  As a user, I want to be able to input information about which gym I climbed
at and what happened on routes that I fell on so that I have a record I can
refer to.
1.  As a user, I want to have the above information displayed in order to check
my training progress.
1.  As a user, I want to see specifically what kind of routes/holds I fall on
the most and have a suggestion displayed for how to
improve at executing those movements.
1.  As a user, I should be able to update and delete climbs so that I can
remedy input errors.
1.  As a user, I want to be able to change my password to maintain my account’s
security.
1.  As a user, I want to be able to sign out when I’m done inputting climbs and
getting results to conclude the session.

## Wireframes/Database Structure

Wireframes: <http://imgur.com/jW5NNsf>

Entity Relationships Diagram: <http://i.imgur.com/dzdBfOd.jpg>
