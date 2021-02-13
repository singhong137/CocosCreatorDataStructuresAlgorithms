import Dictionary from "../../data_structures/Dictionary";
import Graph from "../../data_structures/Graph";
import { Colors } from "../../util";

const initializeColor = (vertices: (string | number)[]): object => {
    const color = {};
    for (let i = 0; i < vertices.length; i++)color[vertices[i]] = Colors.WHITE;
    return color;
}

const depthFirstSearchVisit = (u: string | number, color: object, adjList: Dictionary<string | number, (string | number)[]>, callback: Function) => {
    color[u] = Colors.GRAY;
    if (callback) callback(u);
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) depthFirstSearchVisit(w, color, adjList, callback);
    }
    color[u] = Colors.BLACK;
};

export function depthFirstSearch(graph: Graph, callback: Function) {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
}

interface shortestPathData {
    discovery: object,
    finished: object,
    predecessors: object
};

const DFSVisit = (
    u: string | number,
    color: object,
    d: object,
    f: object,
    p: object,
    time: object,
    adjList: Dictionary<string | number, (string | number)[]>
) => {
    color[u] = Colors.GRAY;
    d[u] = ++time['count'];
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time['count'];
};

export function DFS(graph: Graph): shortestPathData {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = { count: 0 };

    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
}