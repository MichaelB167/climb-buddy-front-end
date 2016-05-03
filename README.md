# Project Components

Live application: <http://michaelb167.github.io/climb-buddy-front-end/>

Back end repository: <https://github.com/MichaelB167/climb-buddy-back-end>

## App Explanation

This web app is an indoor rock climbing training resource for identifying
difficult movements and improving at executing them.  Users can input the
results of their climbing sessions by adding the gym they climbed in and
specific traits of climbs they fell on.  They can then see a list of these
climbs to pick out trends that they could work on improving.  If they want
personalized training suggestions, they can request to see the holds that they
fall on most frequently along with advice on how to target specific muscle
groups that are required for more efficient use of those holds.

## Technologies Used

I used HTML and SCSS to style the page's front end.  To add the menu modals I
applied bootsrap styling.  JQuery facilitates user interaction with the
gameboard via click handlers and produces a display of the game's result upon a
win or tie condition being met.  To communicate with the back end I used a
combination of jQuery, Javascript and AJAX.

## Approach Taken

In an effort to maintain modularity in my code I limited index files to
containing requirements rather than code as well as created separate directories
for files such as AJAX requests and event handlers.  To backup and track my
project, I made frequent and descriptive commits to my project repository.

## Unsolved Problems

## User Stories

1.  As a user, I want to be able to sign up and sign in so that I have a unique
account.
1.  As a user, I want to be able to input information about which gym I climbed
at and what happened on routes that I fell on so that I have a record I can
refer to.
1.  As a user, I want to have the above information displayed in order to check
my training progress.
1.  As a user, I want to see specifically what kind of routes/holds I fall on
the most and have a total of each displayed along with a suggestion for how to
improve at specific movements.
1.  As a user, I should be able to update and delete climbs so that I can
remedy input errors.
1.  As a user, I want to be able to change my password to maintain my account’s
security.
1.  As a user, I want to be able to sign out when I’m done inputting climbs and
getting results to conclude the session.

## Wireframes/Database Structure

Wireframs: <http://imgur.com/jW5NNsf>

Entity Relationships Diagram: <http://i.imgur.com/XVvYTwi.jpg>
