import Graph from "../../data_structures/Graph";
import { Queue } from "../../data_structures/Queue";
import { Colors } from "../../util";

const initializeColor = (vertices: (string | number)[]): object => {
    const color = {};
    for (let i = 0; i < vertices.length; i++)color[vertices[i]] = Colors.WHITE;
    return color;
}

export function breadthFirstSearch(graph: Graph, startVertex: string | number, callback: Function) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue<string | number>();

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GRAY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GRAY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) callback(u);
    }
}

interface shortestPathData {
    distances: object,
    predecessors: object
};

export function BFS(graph: Graph, startVertex: string | number): shortestPathData {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue<string | number>();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);

    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GRAY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GRAY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }

    return {
        distances: distances,
        predecessors: predecessors
    }
}