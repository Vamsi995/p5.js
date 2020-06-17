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
var boxWidth = 20

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
        rect(vertex.x, vertex.y, boxWidth, boxWidth);
        queue.push(vertex);
      }
    }
    u.color = 2;
    stroke(0);
    fill(0);
    rect(u.x, u.y, boxWidth, boxWidth);
  }
}

function makeGraph(graph, width, height) {
  hor = width;
  ver = height;

  for (let i = 0; i < hor; i += boxWidth) {
    for (let j = 0; j < ver; j += boxWidth) {
      let temp = (i * ver) / boxWidth + j;

      if (j - boxWidth < 0) {
        if (i - boxWidth < 0) {
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + boxWidth >= ver) {
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        }
      } else if (j + boxWidth >= hor) {
        if (i - boxWidth < 0) {
          graph.addEdge(temp, temp - boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + boxWidth >= ver) {
          graph.addEdge(temp, temp - boxWidth, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp - boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        }
      } else {
        if (i - boxWidth < 0) {
          graph.addEdge(temp, temp - boxWidth, i, j);
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
        } else if (i + boxWidth >= ver) {
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp - boxWidth, i, j);
          graph.addEdge(temp, temp - hor, i, j);
        } else {
          graph.addEdge(temp, temp + boxWidth, i, j);
          graph.addEdge(temp, temp + hor, i, j);
          graph.addEdge(temp, temp - hor, i, j);
          graph.addEdge(temp, temp - boxWidth, i, j);
        }
      }
    }
  }
}

function draw() {
  // background(255);
    stroke(0);
    // fill(255);
  // strokeWeight(2)
    for (let i = 0; i < width; i += boxWidth) {
      // for (let j = 0; j < height; j += boxWidth) {
        // rect(i, j, boxWidth, boxWidth);
        line(i,0,i,height)
        line(0,i,width,i);
      // }
    }
  if (queue.length != 0) {
     let u = queue.shift();
     
     for (let v of graph.getVertexNeighbours(u)) {
        let vertex = graph.vertexSet[v];
        if (vertex.color == 0) {
           vertex.distance = u.distance + 1;
           vertex.color = 1;
          //  fill(255, 0, 0);
          //  rect(vertex.x, vertex.y, boxWidth, boxWidth);
           queue.push(vertex);
         }
      }
      u.color = 2;
      //  stroke(0);
       fill(0);
       rect(u.x, u.y, boxWidth, boxWidth);
       fill(255)
       textSize(9)
       textAlign(CENTER,CENTER)
       text(String(u.distance),u.x+boxWidth/2,u.y+boxWidth/2)

   }
   
}
