document.getElementById('addNodeBtn').addEventListener('click', addNode);

const graph = ForceGraph();

const initData = {
    nodes: [ {id: 0 } ],
    links: []
};

graph(document.getElementById('graph'))
    .width(960)
    .height(800)
    .graphData(initData);


function addNode() {
    const { nodes, links } = graph.graphData();
    const id = nodes.length;
    graph.graphData({
        nodes: [...nodes, { id }],
        links: [...links, { source: id, target: Math.round(Math.random() * (id-1)) }]
    });
}