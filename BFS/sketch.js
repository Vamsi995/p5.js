class Vertex {
  constructor(id) {
    this.id = id;
    this.color = 0;
    this.distance = 0;
    this.adj_vertices = {};
  }
}

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

var queue = [];
var graph = new Graph();

function setup() {
  const height = 600;
  const width = 600;
  var source;
  var destination;
  createCanvas(height, width);

  makeGraph(graph, width, height);

  source = graph.vertexSet[0];
  destination = graph.vertexSet[width - 1];
  queue.push(source);
}

function bfs() {
  while (queue.length != 0) {
    let u = queue.shift();

    for (let v of graph.getVertexNeighbours(u)) {
      if (graph.vertexSet[v].color == 0) {
        graph.vertexSet[v].distance = u.distance + 1;
        graph.vertexSet[v].color = 1;
        queue.push(graph.vertexSet[v]);
      }
    }
    u.color = 2;
  }
}

function makeGraph(graph, width, height) {
  hor = width / 10;
  ver = height / 10;

  for (let i = 0; i < hor; i += 10) {
    for (let j = 0; j < ver; j += 10) {
      let temp = (i * ver) / 10 + j;

      if (j - 10 < 0) {
        if (i - 10 < 0) {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp - hor);
        } else {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
          graph.addEdge(temp, temp - hor);
        }
      } else if (j + 10 >= hor) {
        if (i - 10 < 0) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + hor);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp - hor);
        } else {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + hor);
          graph.addEdge(temp, temp - hor);
        }
      } else {
        if (i - 10 < 0) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp - hor);
        } else {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
          graph.addEdge(temp, temp - hor);
          graph.addEdge(temp, temp - 10);
        }
      }
    }
  }
}

function draw() {
  background(0);
  //   stroke(255);
  // strokeWeight(2)
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      rect(i, j, 10, 10);
    }
  }
  bfs();
}
