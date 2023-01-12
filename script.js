function knightMoves(startPoint, endPoint)  {

    //  Handles any issues with the given endPoint or startPoint
    if (startPoint[0] > 8 || startPoint[0] < 1) return console.log('Start Point X Value needs to be between 1 and 8');
    if (startPoint[1] > 8 || startPoint[1] < 1) return console.log('Start Point Y Value needs to be between 1 and 8');
    if (endPoint[0] > 8 || startPoint[0] < 1) return console.log('End Point X Value needs to be between 1 and 8');
    if (endPoint[1] > 8 || startPoint[1] < 1) return console.log('End Point X Value needs to be between 1 and 8');


    //  Holds all moves that can be performed by knight
    const movesAvailable = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]; 

    //  Stores all moves that have been made and their paths
    let currentMoves = [[startPoint]];

    //  Stores move that reaches end point first
    let finalizedMoves = [];

    //  Changes position of current move, adds it to path, and pushes to correct array
    const changePosition = (activeMove, currentPosition, move) => {

        //  Makes copy of activeMove
        let baseMove = activeMove.slice();

        //  Finds new position
        let newX = currentPosition[0] + move[0];
        let newY = currentPosition[1] + move[1];
        let newPosition = [newX, newY];

        //  If the x or y value of the new position goes out of the chess board, return
        if (newX < 1 || newX > 8) return;
        if (newY < 1 || newY > 8) return;

        //  If the current move path already contains the new position, return
        if (activeMove.includes(newPosition)) return;


        //  Pushes new position into current moves path
        baseMove.push(newPosition)
        
        //  If the new position == endPoint, push to finalized move
        if (newPosition[0] == endPoint[0] && newPosition[1] == endPoint[1]) finalizedMoves.push(baseMove);

        //  If endpoint still not reached, push back into current moves so move can be acted on again
        else currentMoves.push(baseMove)
    }
       

    //  Loops through current moves
    while(currentMoves.length > 0)  {

        //  Pulls first move from the current moves array
        const activeMove = currentMoves.shift();

        //  Pulls the last position in the array of the active move
        const currentPosition = activeMove[activeMove.length - 1]

        //  Loop through the moves available
        for(let i = 0; i < movesAvailable.length; i++)  {
            changePosition(activeMove, currentPosition, movesAvailable[i])
        }

        //  When a finalized move is reached, display answer
        if (finalizedMoves.length > 0) return displayAnswer(finalizedMoves[0]);
    }

    function displayAnswer(answer) {
        console.log(`You did it in ${answer.length} tries! Here is your route:`)
        for(let i = 0; i < answer.length; i++)  {
            console.log(answer[i])
        }
    }

}

//  Testing Function

knightMoves([1,8],[6,3])
//  You did it in 5 tries! Here is your route:
//  [1, 8]
//  [3, 7]
//  [5, 6]
//  [7, 5]
//  [6, 3]

knightMoves([3,1],[3,2])
//  You did it in 4 tries! Here is your route:
//  [3, 1]
//  [5, 2]
//  [5, 6]
//  [4, 4]
//  [3, 2]

knightMoves([1,1],[3,2])
//  You did it in 2 tries! Here is your route:
//  [1, 1]
//  [3, 2]


