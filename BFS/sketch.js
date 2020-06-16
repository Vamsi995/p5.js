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
       console.log(v)
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

   hor = width/10;
   ver = height / 10;

  for (let j = 0; j < hor; j+=10) {
    for (let i = 0; i < ver; i+=10) {
      let temp = j * hor + i;

      if (i - 10 < 0) {
        if (j - 10 < 0) {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
        } else if (j + 1 >= ver) {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp - hor);
        } else {
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
          graph.addEdge(temp, temp - hor);
        }
      } else if (i + 10 >= hor) {
        if (j - 10 < 0) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + hor);
        } else if (j + 10 >= ver) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp - hor);
        } else {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + hor);
          graph.addEdge(temp, temp - hor);
        }
      } else {
        if (j - 10 < 0) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + 10);
          graph.addEdge(temp, temp + hor);
        } else if (j + 10 >= ver) {
          graph.addEdge(temp, temp - 10);
          graph.addEdge(temp, temp + 10);
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
   background(0)
   stroke(255)
   // strokeWeight(2)
   for(let i=0; i<width;i+=10){
      line(i,0,i,height)
      line(0,i,width,i)
   }
   bfs();
}
