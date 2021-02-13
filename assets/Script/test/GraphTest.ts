import { BFS, breadthFirstSearch } from "../algorithms/graph/breadth-first-search";
import { depthFirstSearch, DFS } from "../algorithms/graph/depth-first-search";
import { dijkstra, dijkstraWithPath } from "../algorithms/graph/dijkstra";
import { floydWarshall, floydWarshallWithPath } from "../algorithms/graph/floyd-warshall";
import { kruskal } from "../algorithms/graph/kruskal";
import { prim } from "../algorithms/graph/prim";
import Graph from "../data_structures/Graph";
import { Stack } from "../data_structures/Stack";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GraphTest extends cc.Component {
    start(){
        console.log('GraphTest~~');

        let graph = new Graph();

        let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

        for (let i = 0; i < myVertices.length; i++) graph.addVertex(myVertices[i]);

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');

        // graph.addEdge('C', 'D');
        // graph.addEdge('B', 'E');
        // graph.addEdge('A', 'D');

        console.log('********* printing graph ***********');

        console.log(graph.toString());

        console.log(graph.getAdjList().get('B'));

        const printVertex = (value: string | number) => console.log('Visited vertex: ' + value);

        console.log('start from A :');
        breadthFirstSearch(graph, myVertices[0], printVertex);

        console.log('start from D :');
        breadthFirstSearch(graph, 'D', printVertex);

        console.log('********* sorthest path from A- BFS ***********');
        const shortestPathA = BFS(graph, myVertices[0]);
        console.log(shortestPathA.distances);
        console.log(shortestPathA.predecessors);

        console.log('********* sorthest path from D- BFS ***********');
        const shortestPathD = BFS(graph, 'D');
        console.log(shortestPathD.distances);
        console.log(shortestPathD.predecessors);

        console.log('********* from A to all other vertices ***********');

        const fromVertex = myVertices[0];
        for (let i = 1; i < myVertices.length; i++) {
            const toVertex = myVertices[i];
            const path = new Stack();
            for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) path.push(v);
            path.push(fromVertex);
            let s = path.pop();
            while (!path.isEmpty()) s += ' _ ' + path.pop();
            console.log(s);
        }

        console.log('********* dfs with callback ***********');
        depthFirstSearch(graph, printVertex);

        console.log('********* topological sort - DFS ***********');
        graph = new Graph();
        for (let i = 0; i < myVertices.length; i++) graph.addVertex(myVertices[i]);

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');

        let result = DFS(graph);
        console.log('discovery', result.discovery);
        console.log('finished', result.finished);
        console.log('predecessors', result.predecessors);

        graph = new Graph(true);
        myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < myVertices.length; i++) {
            graph.addVertex(myVertices[i]);
        }
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('B', 'D');
        graph.addEdge('B', 'E');
        graph.addEdge('C', 'F');
        graph.addEdge('F', 'E');

        result = DFS(graph);
        console.log('discovery', result.discovery);
        console.log('finished', result.finished);
        console.log('predecessors', result.predecessors);

        const fTimes = result.finished;
        let s = '';
        for (let count = 0; count < myVertices.length; count++) {
            let max = 0;
            let maxName = null;
            for (let i = 0; i < myVertices.length; i++) {
                if (fTimes[myVertices[i]] > max) {
                    max = fTimes[myVertices[i]];
                    maxName = myVertices[i];
                }
            }
            s += ' _ ' + maxName;
            delete fTimes[maxName];
        }
        console.log(s);

        const graphM = [
            [0, 2, 4, 0, 0, 0],
            [0, 0, 1, 4, 2, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 3, 0, 2],
            [0, 0, 0, 0, 0, 0]
        ];

        console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

        console.log(` 
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]`
        )

        let dist = dijkstra(graphM, 0);
        dist.forEach((v, i) => { console.log(i + '\t\t' + v); });

        let distPath = dijkstraWithPath(graphM, 0);
        distPath.forEach((v, i) => console.log(v + '\t\t'));

        console.log('********* Floyd-Warshall Algorithm - All-Pairs Shortest Path ***********');

        const INF = Infinity;
        const graphN = [
            [INF, 2, 4, INF, INF, INF],
            [INF, INF, 1, 4, 2, INF],
            [INF, INF, INF, INF, 3, INF],
            [INF, INF, INF, INF, INF, 2],
            [INF, INF, INF, 3, INF, 2],
            [INF, INF, INF, INF, INF, INF]
        ];
        let distN = floydWarshall(graphN);
        let pathN = floydWarshallWithPath(graphN);

        const graphO = [
            [INF, 3, 8, INF, -4],
            [INF, INF, INF, 1, 7],
            [INF, 4, INF, INF, INF],
            [2, INF, -5, INF, INF],
            [INF, INF, INF, 6, INF]
        ];

        let distO = floydWarshall(graphO);
        let pathO = floydWarshallWithPath(graphO);

        let printMatrix = (m: number[][]) => {
            let s = '';
            for (let i = 0; i < m.length; ++i) {
                s = '';
                for (var j = 0; j < m.length; ++j) {
                    if (m[i][j] === INF) {
                        s += ' ';
                        s += 'INF ';
                    } else {
                        if (m[i][j] >= 0) s += ' ';
                        s += m[i][j] + '   ';
                    }
                }
                console.log(s);
            }
        }

        console.log('\n');
        console.log('floyd dist')
        printMatrix(distN);
        console.log('\n');
        printMatrix(distO);

        console.log('\n');
        console.log('floyd path');
        printMatrix(pathN);
        console.log('\n');
        printMatrix(pathO);

        // console.log(distN);

        const graphP = [
            [0, 2, 4, 0, 0, 0],
            [2, 0, 1, 4, 2, 0],
            [4, 1, 0, 0, 3, 0],
            [0, 4, 0, 0, 3, 2],
            [0, 2, 3, 3, 0, 2],
            [0, 0, 0, 2, 2, 0]
        ];

        console.log("********* Prim's Algorithm - Minimum Spanning Tree ***********");

        const pathP = prim(graphP);

        console.log('Edge   Weight');
        for (let i = 1; i < graphP.length; i++)console.log(pathP[i] + ' - ' + i + '   ' + graphP[i][pathP[i]]);
        console.log('prims parent:', pathP)

        console.log('\n');
        console.log('********* Kruskal Algorithm - Minimum Spanning Tree ***********');
        const pathQ = kruskal(graphP);
        console.log('Edge   Weight');
        for (let i = 0; i < graphP.length - 1; i++)console.log(pathQ[i][0] + ' - ' + pathQ[i][1] + '   ' + pathQ[i][2]);
        console.log('\n');
        console.log('kruskals parent:', pathQ)

        let uf = new UnionFind(["A", "B", "C", "D", "E"]);
        uf.union("A", "B"); uf.union("A", "C");
        uf.union("C", "D");

        console.log(uf.connected("B", "E"));
        console.log(uf.connected("B", "D"));

        uf = new UnionFind([0, 1, 2, 3, 4]);
        uf.union(0, 1); uf.union(0, 2);
        uf.union(2, 3);

        console.log(uf.connected(1, 4));
        console.log(uf.connected(1, 3));
    }
}

class UnionFind {
    private count: number;
    private parent: (string | number)[];
    constructor(elements: (number | string)[]) {
        // Number of disconnected components
        this.count = elements.length;

        // Keep Track of connected components
        this.parent = [];

        // Initialize the data structure such that all
        // elements have themselves as parents
        elements.forEach(e => (this.parent[e] = e));
    }

    union(a: string | number, b: string | number) {
        let rootA = this.find(a);
        let rootB = this.find(b);

        // Roots are same so these are already connected.
        if (rootA === rootB) return;

        // Always make the element with smaller root the parent.
        if (rootA < rootB) {
            if (this.parent[b] != b) this.union(this.parent[b], a);
            this.parent[b] = this.parent[a];
        } else {
            if (this.parent[a] != a) this.union(this.parent[a], b);
            this.parent[a] = this.parent[b];
        }
    }

    // Returns final parent of a node
    find(a: string | number) {
        while (this.parent[a] !== a) {
            a = this.parent[a];
        }
        return a;
    }

    // Checks connectivity of the 2 nodes
    connected(a: string | number, b: string | number) {
        return this.find(a) === this.find(b);
    }
}