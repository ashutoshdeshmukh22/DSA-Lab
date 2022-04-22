class Graph {
  kruskalsMST() {
    // Initialize graph that'll contain the MST
    const MST = new Graph();
    this.nodes.forEach((node) => MST.addNode(node));
    if (this.nodes.length === 0) {
      return MST;
    }

    // Create a Priority Queue
    edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);

    // Add all edges to the Queue:
    for (let node in this.edges) {
      this.edges[node].forEach((edge) => {
        edgeQueue.enqueue([node, edge.node], edge.weight);
      });
    }

    let uf = new UnionFind(this.nodes);

    // Loop until either we explore all nodes or queue is empty
    while (!edgeQueue.isEmpty()) {
      // Get the edge data using destructuring
      let nextEdge = edgeQueue.dequeue();
      let nodes = nextEdge.data;
      let weight = nextEdge.priority;

      if (!uf.connected(nodes[0], nodes[1])) {
        MST.addEdge(nodes[0], nodes[1], weight);
        uf.union(nodes[0], nodes[1]);
      }
    }
    return MST;
  }
}
let g = new Graph();
g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');
g.addNode('G');

g.addEdge('A', 'C', 100);
g.addEdge('A', 'B', 3);
g.addEdge('A', 'D', 4);
g.addEdge('C', 'D', 3);
g.addEdge('D', 'E', 8);
g.addEdge('E', 'F', 10);
g.addEdge('B', 'G', 9);
g.addEdge('E', 'G', 50);

g.kruskalsMST().display();
