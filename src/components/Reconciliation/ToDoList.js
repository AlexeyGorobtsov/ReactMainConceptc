import React from 'react';

const ToDo = props => (
    <tbody>
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>
                {props.createdAt.toTimeString()}
            </label>
        </td>
    </tr>
    </tbody>
);

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.toDoCounter = 1;
        this.state = {
            list: [
                {
                    id: this.toDoCounter,
                    createdAt: this.date
                }
            ],
            toDoCounter: this.toDoCounter
        }
    }

    sortBy(cond = 'earl') {
        this.sortedList = this.state.list.sort((a, b) => {
            if (cond === 'earl') {
                return a.createdAt - b.createdAt;
            } else {
                return b.createdAt - a.createdAt;
            }
        });

        this.setState({
            list: [...this.sortedList]
        })
    }

    addTo(cond = 'start') {
        this.date = new Date();
        this.nextId = this.state.toDoCounter + 1;
        if (cond === 'start') {
            this.newList = [
                ...this.state.list,
                {id: this.nextId, createdAt: this.date}
            ];
        } else {
            this.newList = [
                {id: this.nextId, createdAt: this.date},
                ...this.state.list
            ];
        }

        this.setState({
          list: this.newList,
          toDoCounter: this.nextId
        })
    }

    render() {
        return(
            <div>
                <code>key=id</code>
                <br/>
                <button onClick={()=> this.addTo('start')}>
                    Add New to Start
                </button>
                <button onClick={() => this.addTo('end')}>
                    Add New to And
                </button>
                <button onClick={() => this.sortBy('earl')}>
                    Sort by Earliest
                </button>
                <button onClick={() => this.sortBy('last')}>
                    Sort by Latest
                </button>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Created at</th>
                    </tr>
                    </thead>
                    {this.state.list.map((todo, indes) => (
                        <ToDo key={todo.id} {...todo} />
                    ))}
                </table>
            </div>
        )
    }
}


