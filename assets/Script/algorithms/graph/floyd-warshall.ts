export function floydWarshall(graph: number[][]): number[][] {
    const dist: number[][] = [];
    const length = graph.length;

    for (let i = 0; i < length; i++) {
        dist[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

export function floydWarshallWithPath(graph: number[][]): number[][] {
    const dist: number[][] = [];
    const length = graph.length;
    const paths: number[][] = graph.slice(0);

    for (let i = 0; i < length; i++) {
        dist[i] = [];
        paths[i] = graph[i].slice(0);
        paths[i].fill(0);
        for (let j = 0; j < length; j++) {
            // paths[i][j] = graph[i][j];
            paths[i][j] = j;
            if (i === j) {
                dist[i][j] = 0;
                paths[i][j] = Infinity;
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    paths[i][j] = paths[i][k];
                }
            }
        }
    }

    return paths;
}