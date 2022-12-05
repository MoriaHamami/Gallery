'use strict'

var gGallery

_createGallery()

function getGallery() {
    return gGallery
}

function getProjectById(projectId) {
    const project = gGallery.find(project => projectId === project.id)
    return project
}

function _createProject(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels
    }
}

function _createGallery() {
    gGallery = [
        _createProject(
            'booksShop',
            'Book Store',
            'CRUDL | Transition & Flexbox | URL Search Parameters | Sort & Filter',
            'This online bookstore was built using the CRUDL Structure. The user has the ability to add new books, update their prices, sort by price and title. In addition, the table with books reveals 5 books per page, while giving the user the ability to switch pages. The book store has a search box, where the user can search for a book by its\'s title. The table can be filtered by maximum price and minimum rate. Each book has a modal with information about the book chosen.',
            'https://moriahamami.github.io/Books-Shop/',
            1669900260000,
            ['Modal', 'Transition', 'CRUDL', 'CSS', 'Flexbox', 'Book', 'Shop', 'Store', 'Online', 'URLSearchParams', 'Query string', 'Sort', 'Filter', 'Pages', 'Page', 'Storage']
        ),
        _createProject(
            'inPicture',
            'What is in the Picture',
            'Sounds | Game | Modal',
            'This game was the first game I created, and therefore was created with very basic coding skills. It includes sound effects in every right or wrong click. The user has the opportunity to choose what appears each picture. Whether the user wins or loses affects the end of the game.',
            'https://moriahamami.github.io/In-Picture-Game/',
            1668711600000,
            ['Sound', 'Game', 'Modal', 'Render', 'Events']
        ),
        _createProject(
            'minesweeper',
            'Mine Sweeper',
            'Recurssion | Vanilla CSS | Timer | Matrix | Bonus Features',
            'This game includes many user friendly features: the ability to switch between light mode and dark mode, to get different kind of hints, to change levels or use manual mode, and much more. The game has a timer which keeps the best score (even after refreshing the page!). The player has three lives, and with each win or lose the restart button has a smiley accordingly. This project was created using Vanilla CSS.',
            'https://moriahamami.github.io/Mine-Sweeper/',
            1669489200000,
            ['Interval', 'Timeout', 'Hide', 'Toggle', 'Dark Mode', 'Neighbors', 'Matrix', 'Timer', 'Vanilla', 'Mouse Events', 'Board', 'Levels', 'Context Menu', 'Prevent Default']
        ),
        _createProject(
            'pacman',
            'Pacman',
            'Board Game | Neighbors in Matrix',
            'This game gives the user the ability to move pacman using the keyboard arrows. If pacman eats the cakes, he gets special abilities which enable him to eat the ghosts. The same ghosts come back to life after pacman reverts to his normal state. The game tracks the users\' score.',
            'https://moriahamami.github.io/Pacman/',
            1669057200000,
            ['Board', 'Game', 'Keyboard Events', 'Neighbors', 'Matrix', 'Hide', 'Timeout', 'Random Color', 'Random Integer']
        ),
        _createProject(
            'collectBalls',
            'Collect Balls',
            'Board Game | Portals | Keyboard & Mouse Usage | Sounds',
            'This board game includes many features, such as portals for the player to go through, balls adding up, sound effects, and glue which appears and disappears. The user has the ability to move the player using the keyboard arrows and mouse clicks.',
            'https://moriahamami.github.io/Ball-Board/',
            1668970800000,
            ['Portals', 'Keyboard Events', 'Mouse Events', 'Game', 'Board', 'Matrix', 'Vanilla CSS', 'Sounds', 'Render', 'Neighbors']
        ),
        _createProject(
            'guessWho',
            'Guess Who',
            'jQuery | Bootstrap | Tree Data Structure | Storage',
            'This was my first game built with Bootstrap. In this smart game, Genie tries to guess what character or person the user was thinking about. If the Genie gets it wrong, the user tells the Genie his character/ person, and a leading up question to help Genie know it next time.',
            'https://moriahamami.github.io/Guess-Who/',
            1670159220000,
            ['Library', 'jQuery', 'Bootstrap', 'Developing', 'Smart', 'Learner', 'Tree', 'Structure', 'Array Extras', 'Stroage']
        ),
    ]
}

