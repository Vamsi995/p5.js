
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
      console.log(Object.keys(u.adj_vertices))
     return Object.keys(u.adj_vertices);
   }
 }
 
var queue = [];
var graph = new Graph()

function setup() {
   const height = 300;
   const width = 300;
   var source;
   var destination;
  createCanvas(height, width);
  
  makeGraph(graph,width,height)

  source = graph.vertexSet[0];
  destination = graph.vertexSet[width-1];  
  queue.push(source)
}

function bfs(){

   while(queue.length != 0){

      let u = queue.shift()

      for(let v of graph.getVertexNeighbours(u)){

         if(graph.vertexSet[v].color == 0){
            graph.vertexSet[v].distance = u.distance + 1;
            graph.vertexSet[v].color = 1;
            queue.push(graph.vertexSet[v]);
         }


      }

      u.color = 2;
      console.log(u.id);

   }
   


}

function makeGraph(graph,width,height){
   for(let j = 0;j <width; j++){

      for(let i = 0;i<height; i++){
         let temp = j*width + i;
         // console.log(temp)
            if(i-1 < 0){
               if(j - 1 < 0){
                  graph.addEdge(temp,temp+1);
                  graph.addEdge(temp,temp+width);
               }
               else if(j+1 >= height){

                  graph.addEdge(temp,temp+1);
                  graph.addEdge(temp,temp-width);
               }
               else{
                  graph.addEdge(temp,temp+1)
                  graph.addEdge(temp,temp+width)
                  graph.addEdge(temp,temp-width)
               }
            }
            else if(i+1 >= width){
               if(j - 1 < 0){
                  graph.addEdge(temp,temp-1);
                  graph.addEdge(temp,temp+width);
               }
               else if(j+1 >= height){

                  graph.addEdge(temp,temp-1);
                  graph.addEdge(temp,temp-width);
               }
               else{
                  graph.addEdge(temp,temp-1)
                  graph.addEdge(temp,temp+width)
                  graph.addEdge(temp,temp-width)
               }

            }
            else{
               graph.addEdge(temp,temp+1)
               graph.addEdge(temp, temp+width)
               graph.addEdge(temp, temp-width)
               graph.addEdge(temp, temp-1)

            }
      }


  }
}

function draw() {

   bfs();


}
