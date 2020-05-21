import React from 'react';
import axios from 'axios';

class CheckeredBox extends React.Component {

    constructor() {
        super();
        this.state = {
            boxSize: 8
        }

    }

    /**
     * changes the value of the box size in MongoDB
     * @param {*} event 
     */
    changeSize(event) {
        event.preventDefault();
        this.setState({
            boxSize: this.refs.boxSize.value
        })
        
        axios.post('http://localhost:8080/box', {
            size: this.refs.boxSize.value
        })
        .then((response) => {
            console.log(response);
            this.makeBoard();
        })
        .catch((error) => {
            console.timeLog(error);
        });
    }

    makeBoard() {
        var col = this.state.boxSize;
        var row = col;
        var table = document.createElement("table");

        for (var i = 0; i < col; i++) {
            var tableRow = document.createElement('tr');
            for (var j = 0; j < row; j++) {
                var tableCol = document.createElement('td');
                if (j % 2 === i % 2) {
                    tableCol.className = "black";
                } else {
                    tableCol.className = "white";
                }
                tableRow.appendChild(tableCol);
            }
            table.appendChild(tableRow);
        }
        document.body.appendChild(table);
    }
    

    render() { 
        return ( 
            <div className="row">
                <h1 className="center">Change the Size of the CheckeredBox</h1>
                <h2>Current size of the box: {this.state.boxSize}</h2>
                    <form className="col s12" onSubmit={this.changeSize.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="boxSize" ref="boxSize" type="number" />
                                <label htmlFor="boxSize">Box Size</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit"
                        nme="action">Change Size</button>
                    </form>
            </div> 
        );
    }
}
 
export default CheckeredBox;