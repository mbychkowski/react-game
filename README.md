# [React Tile Game](https://react-tile-game.herokuapp.com/)
A memory game built using [React](https://reactjs.org/). The goal of the game is to select a different character with each click without clicking on a character twice to obtain a possible top score of 12. If a character is selected who has already been clicked, the game will start over back at 0. Good luck!

![screenshot](https://github.com/mbychkowski/react-game/blob/master/public/screenshot.png?raw=true)

## How it was built
This app was built to practice using react. All components used to create this app were *dumb* components, which included:
* Jumbotron
* MemoryCard
* Navbar
* Wrapper

After each click the **MemoryCard** components are shuffled radomly and re-mapped to add some difficulty to the game. The total score is kept track in state and set back to 0 when there is an double selection.
