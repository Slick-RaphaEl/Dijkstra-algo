import React, {Component} from 'react';

export default class ProjectInfo extends Component {
    render() {
        return (
            <div className="info-box">
                <h1>Dijkstra's Pathfinder Visualizer</h1>
                <p>
                    This project shows Dijkstra's algorithm in action. Dijkstra algorithm is a pathfinding algorithm which is guaranteed to find the shortest distance between Nodes. Hold your cursor over the graph to create a wall between the nodes and click the visualize Dijkstra algorithm button to see the result. 
                </p>
            </div>
        );
    }
}