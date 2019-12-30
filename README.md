
# Sequence
Sequence is the Phase 3 React project for Digital Crafts that creates a web app version of the board game [Sequence](https://en.wikipedia.org/wiki/Sequence_(game))

The Purpose of this project was not necessarily to complete the game, but to utilize react. Because of the complexity of the project, I chose a reasonable stopping point and stopped there. 

## Technologies used:
| Technology | Purpose |
| ---------- | ------- |
| [create-react-app](https://create-react-app.dev/) | Sets up a modern web app by running one command. |
| [react-bootsrap](https://react-bootstrap.github.io/) | The most popular front-end framework Rebuilt for React. |
| [React Card Deck](https://codepen.io/ursooperduper/pen/EXWxdW?editors=1111) | a deck of cards that works with react. |

## Reflections
### Limiting Scope
* It was necessary to limit the scope of this project in order to complete it in the time alotted. Tasks can often be more complex and time consuming than first realized.
### Separating Logic from Rendering
* Figuring out the logic for your components before trying to render them is very helpful.


## Project Guidelines
* You must use React.js and Redux in order to manage the state of a frontend application.
using react-redux is highly recommended, but not a hard required
Your application must contain at least 6 React components.
* Organize components into separate files and import / export using es6 modules
  * In general it should be "one component per file"
  * There can be exceptions to this; use your best judgment on code organization
* You must have at least 5 separate Redux action types.
* At least one component must use local state and not participate in the Redux state management
  * Tip: pick a small component with some trivial, ephemeral state for this
  * When in doubt, store things in your Redux store
* At least one component must use a lifecycle method like componentDidMount, componentWillUnmount, etc

## Bonus Requirements
NOTE: These are not required for the project, but advised for better understanding / comprehension of the topic.

* Use a component from an external library, loaded via npm
  * Example: bulma-react-components, react-bootstrap, etc
* Persist your Redux store somewhere like localStorage or an external database
  * When the user refreshes your page you should be able to load exactly the same state they were in when they left the page
* Instead of writing one large application, write two small ones
  * More projects is good for your portfolio
* Deploy your project somewhere where people can see and play with it
  * GitHub Pages
  * Firebase hosting
  * etc.

