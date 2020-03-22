dest = [
    ['B', 'C'],
    ['C', 'D'],
    ['A', 'B'],
    ['A', 'B0'],
];

const tp = (dest)=>{
    const graph = {};

    dest.forEach(node => {
        const from = node[0];
        const to = node[1];

        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    });


    const visited = {};
    const sorted = [];
    
    const visit = (node) => {
        if (visited[node]) {
            return;
        }
        visited[node] = true;

        if (!graph[node]) {
            sorted.push(node);
            return;
        }

        graph[node].forEach(visit);

        sorted.push(node);
    }


    for (let node of Object.keys(graph)) {
        visit(node);
    }


    return sorted;
}

// tp(dest) === ["D", "C", "B", "B0", "A"]
