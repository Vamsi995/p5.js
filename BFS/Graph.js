class Graph {
  constructor() {
    this.vertexSet = {};
  }

  addVertex(id) {
    this.vertexSet[id] = new Vertex(id);
  }

  addEdge(u, v, weight = 0) {
    if (u in this.vertexSet) {
      this.vertexSet[u].adj_vertices[v] = weight;
    } else {
      this.vertexSet[u] = new Vertex(u);
      this.vertexSet[u].adj_vertices[v] = weight;
    }
  }

  getVertexNeighbours(u) {
    return Object.keys(u.adj_vertices);
  }
}
