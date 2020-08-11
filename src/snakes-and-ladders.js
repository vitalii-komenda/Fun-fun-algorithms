// Snakes and Ladders: The Quickest Way Up
// https://www.hackerrank.com/challenges/the-quickest-way-up/problem

const dice = [6,5,4,3,2,1];

// Returns next moves
function nextPos(index, weight, jumps) {
    const map = dice.map(roll => {
        // skip square beyond 100 
        if (index + roll > 100) {
            return null;
        }
        // replace with exit move from ladder or snake
        if (jumps[index + roll]) {
            return {
                val: jumps[index + roll],
                weight: weight
            }
        }
        // explore next 6 moves
        return {val: index + roll, weight};
    }).filter(val => val !== null);

    // add exit move from ladder or snake
    if (jumps[index]) {
        map.unshift({
            val: jumps[index],
            weight: weight-1
        });
    }

    return map;
}

// Complete the quickestWayUp function below.
// O(l + s + 100*6) = O(n)
function quickestWayUp(ladders, snakes) {
    const jumps = {};

    ladders.forEach(ladder => {
        jumps[ladder[0]] = ladder[1];
    });

    snakes.forEach(snake => {
        jumps[snake[0]] = snake[1];
    });

    const listToExplore = nextPos(1, 1, jumps);
    const visited = new Set();
    let lastChild;
    
    while ( listToExplore.length > 0 && !visited.has(100)) {
        var node = listToExplore.shift();

        nextPos(node.val, node.weight+1, jumps).forEach( function( child ) {
            if ( !visited.has( child.val ) ) {
                visited.add( child.val );
                listToExplore.push( child );

                if (child.val === 100) lastChild = child;
            }
        } );
    }

    return visited.has(100) ? lastChild.weight : -1;
}
