import Dictionary from "./Dictionary";

export default class Graph {
    private vertices: (string | number)[] = [];
    private adjList: Dictionary<string | number, (string | number)[]> = new Dictionary();

    constructor(private isDirected = false) { }

    public addVertex(v: string | number) {
        if (this.vertices.indexOf(v) == -1) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    public addEdge(a: string | number, b: string | number) {
        if (!this.adjList.get(a)) this.addVertex(a);
        if (!this.adjList.get(b)) this.addVertex(b);

        this.adjList.get(a).push(b);
        if (!this.isDirected) this.adjList.get(b).push(a);
    }

    public getVertices(): (string | number)[] {
        return this.vertices;
    }

    public getAdjList(): Dictionary<string | number, (string | number)[]> {
        return this.adjList;
    }

    public toString(): string {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + '->';
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++)s += neighbors[j] + ' ';
            s += '\n';
        }
        return s;
    }
}