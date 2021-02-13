const INF = 9;//Number.MAX_SAFE_INTEGER;

const initializeCost = (graph: number[][]): number[][] => {
    const cost: number[][] = [];
    const length = graph.length;
    for (let i = 0; i < length; i++) {
        cost[i] = [];
        for (let j = 0; j < length; j++) {
            if (graph[i][j] === 0) {
                cost[i][j] = INF;
            } else {
                cost[i][j] = graph[i][j];
            }
        }
    }
    return cost;
};


const find = (i: number, parent: number[]): number => {
    while (parent[i] > 0) i = parent[i];
    return i;
};

const union = (i: number, j: number, parent: number[]): boolean => {
    if (i != j) {
        parent[i] = j;
        return true;
    }
    return false;
};

export function kruskal(graph: number[][]): number[] {
    const length = graph.length;
    const parent: number[] = new Array<number>(length).fill(-1);

    const cost = initializeCost(graph);

    const edges: number[][] = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (cost[i][j] != INF) {
                let edge = [i, j, cost[i][j]];
                edges.push(edge);
                cost[i][j] = cost[j][i] = INF;
            }
        }
    }

    edges.sort((a, b) => { return a[2] - b[2] });

    let mst = [];

    build: for (let m = 0; m < edges.length; m++) {
        let a = find(edges[m][0], parent);
        let b = find(edges[m][1], parent);

        union(a, b, parent);

        if (union(a, b, parent)) mst.push(edges[m]);

        if (mst.length == length - 1) break build;
    }
    return mst;
}