import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      items: [
        { id: 1, task:"Go to Code and Coffee", completed: true },
        { id: 2, task:"Learn React", completed: false },
        { id: 3, task:"Go to sleep", completed: false }
      ]
    };
  }

  handleAdd (item) {
    let items = this.state.items.concat(item);
    this.setState({items: items});
  }

  render () {
    return (
      <div className='todos'>
        <h3>Things that I need todo</h3>
        <div>

          <TodoInput onAdd={this.handleAdd.bind(this)} />
          <TodoList items={this.state.items} />
          <CompletedTodos />

        </div>
      </div>
    );
  }
}

class TodoInput extends React.Component {

  constructor () {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange (event) {
    let value = event.currentTarget.value;
    this.setState({ value: value });
  }

  handleClick () {
    let item = { id: Math.random(), completed: false, task: this.state.value };
    this.props.onAdd(item);
  }

  render () {
    return (
      <p>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Add</button>
      </p>
    );
  }
}

class CompletedTodos extends React.Component {
  render () {
    return (
      <p>
        <span>Completed todos: 0 </span>
        <button>Clear completed</button>
      </p>
    );
  }
}

class TodoItem extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.task}</td>
        <td>
          <button>Complete</button>
        </td>
      </tr>
    );
  }
}

class TodoList extends React.Component {
  render () {
    let items = this.props.items.map(function (item) {
      return <TodoItem key={item.id} {...item} />;
    });

    return (
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#container'));
