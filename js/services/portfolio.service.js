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
            'desc',
            'https://moriahamami.github.io/Books-Shop/',
            1669900260000,
            ['Modal', 'Transition', 'CRUDL', 'CSS', 'Flexbox', 'Book', 'Shop', 'Store', 'Online', 'URLSearchParams', 'Query string', 'Sort', 'Filter', 'Pages', 'Page', 'Storage']
        ),
        _createProject(
            'inPicture',
            'What is in the Picture',
            'Sounds | Game | Modal',
            'desc',
            'https://moriahamami.github.io/In-Picture-Game/',
            1668711600000,
            ['Sound', 'Game', 'Modal', 'Render', 'Events']
        ),
        _createProject(
            'minesweeper',
            'Mine Sweeper',
            'Recurssion | Vanilla CSS | Timer | Matrix | Bonus Features',
            'desc',
            'https://moriahamami.github.io/Mine-Sweeper/',
            1669489200000,
            ['Interval', 'Timeout', 'Hide', 'Toggle', 'Dark Mode', 'Neighbors', 'Matrix', 'Timer', 'Vanilla', 'Mouse Events', 'Board', 'Levels', 'Context Menu', 'Prevent Default']
        ),
        _createProject(
            'pacman',
            'Pacman',
            'Board Game | Neighbors in Matrix',
            'desc',
            'https://moriahamami.github.io/Pacman/',
            1669057200000,
            ['Board', 'Game', 'Keyboard Events', 'Neighbors', 'Matrix', 'Hide', 'Timeout', 'Random Color', 'Random Integer']
        ),
        _createProject(
            'collectBalls',
            'Collect Balls',
            'Board Game | Portals | Keyboard & Mouse Usage | Sounds',
            'desc',
            'https://moriahamami.github.io/Ball-Board/',
            1668970800000,
            ['Portals', 'Keyboard Events', 'Mouse Events', 'Game', 'Board', 'Matrix', 'Vanilla CSS', 'Sounds', 'Render', 'Neighbors']
        ),
        _createProject(
            'guessWho',
            'Guess Who',
            'jQuery | Bootstrap | Tree Data Structure | Storage',
            'desc',
            'https://moriahamami.github.io/Guess-Who/',
            1670159220000,
            ['Library', 'jQuery', 'Bootstrap', 'Developing', 'Smart', 'Learner', 'Tree', 'Structure', 'Array Extras', 'Stroage']
        ),
    ]
}

