let maze = [
    [0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0]
];
let x = 0, y = 0;
let directions = ["N", "E", "S", "W"];
let exit = maze[maze[0].length - 1][maze.length - 1];
let exitCheck = document.getElementById("userOutput");
let visited = [];


document.getElementById("showBoard").innerHTML = JSON.stringify(maze);

exitCheck.onclick = () => {
    checkExitExistsOrNot();
    console.log(maze, visited);
    let exitPlace = [maze[0].length - 1, maze.length - 1];
    if(JSON.stringify(visited[visited.length - 1]) === JSON.stringify(exitPlace)){
        console.log('The rat has reached the exit');
    }
    else {
        console.log('The rat has not reached the exit or there is no exit');
    }

}

function checkExitExistsOrNot() {
    tracePath(x, y);
}

function tracePath(x, y) {
    if (maze[maze[0].length - 1][maze.length - 1] !== 'x' &&
        (x >= 0 && x < maze[0].length) && (y >= 0 && y < maze.length) && maze[x][y] !== 1 && maze[x][y] !== "x") {
        visited.push([x, y]);
        maze[x][y] = "x";
        directions.map(direction => {
            if (direction === "N") {
                tracePath(x - 1, y);
            }
            else if (direction === "E") {
                tracePath(x, y + 1);
            }
            else if (direction === "S") {
                tracePath(x + 1, y);
            }
            else if (directions === "W") {
                tracePath(x, y - 1);
            }
        });
    }
}