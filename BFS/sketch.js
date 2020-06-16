class Vertex {
  constructor(id, x, y) {
    this.id = id;
    this.color = 0;
    this.distance = 0;
    this.x = x;
    this.y = y;
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

  addEdge(u, v, x, y, weight = 0) {
    if (u in this.vertexSet) {
      this.vertexSet[u].adj_vertices[v] = weight;
    } else {
      this.vertexSet[u] = new Vertex(u, x, y);
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
      let vertex = graph.vertexSet[v];
      if (vertex.color == 0) {
        vertex.distance = u.distance + 1;
        vertex.color = 1;
        stroke(255, 0, 0);
        fill(255, 0, 0);
        rect(vertex.x, vertex.y, 10, 10);
        queue.push(vertex);
      }
    }
    u.color = 2;
    stroke(0);
    fill(0);
    rect(u.x, u.y, 10, 10);
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
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        }
      } else if (j + 10 >= hor) {
        if (i - 10 < 0) {
          graph.addEdge(temp, temp - 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp - 10, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp - 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        }
      } else {
        if (i - 10 < 0) {
          graph.addEdge(temp, temp - 10, i, j);
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + 10 >= ver) {
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp - 10, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp + 10, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
          graph.addEdge(temp, temp - 10, i, j);
        }
      }
    }
  }
}

function draw() {
  background(255);
  //   stroke(255);
  strokeWeight(2)
    for (let i = 0; i < width; i += 10) {
      for (let j = 0; j < height; j += 10) {
        rect(i, j, 10, 10);
      }
    }
  //   bfs();
  if (queue.length != 0) {
     let u = queue.shift();
     
     for (let v of graph.getVertexNeighbours(u)) {
        let vertex = graph.vertexSet[v];
        if (vertex.color == 0) {
           vertex.distance = u.distance + 1;
           vertex.color = 1;
           stroke(255, 0, 0);
           fill(255, 0, 0);
           rect(vertex.x, vertex.y, 10, 10);
           queue.push(vertex);
         }
      }
      u.color = 2;
      //  stroke(0);
       fill(0);
       rect(u.x, u.y, 10, 10);
   }
   
     frameRate(1)
}
