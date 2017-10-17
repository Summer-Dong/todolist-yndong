import * as React from "react";
import PropTypes from "prop-types";
import Todo from "../components/todo";
import Buttons from '../containers/buttons';
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";
import {completeTodo} from "../actions/index";
import {getStateFromLocalStorage, setStateInLocalStorage} from "../apis/todos";
import {Button, Header, Icon, Radio} from "semantic-ui-react";

var todolistContainerStyle={
  marginTop: 20,
  width: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

var todolistStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
}

class TodoList extends Component {
  static defaultProps = {
    todos : getStateFromLocalStorage()
  }
  static propTypes = {
    todos : PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
          }).isRequired
        ).isRequired
  }

  componentDidUpdate(){
    setStateInLocalStorage();
  }

  render() {
    const { todos, completeTodo } = this.props;
    return (
      <div  style={todolistContainerStyle}>
        {todos.length !== 0 ?
          <div>
            <Header as="h4" textAlign="left">
              <Icon name="tasks"/>
              List everything, to do everything
            </Header>
            <ul>
              {todos.map((todo) => {
                return (
                  todo.isCompleted === false &&
                  <div key={todo.id} style={todolistStyle}>
                    <Todo key={todo.id} {...todo}/>
                    <Radio
                      label='✔️'
                      onClick={completeTodo.bind(this, todo)}
                    />
                  </div>
                )
              })
              }
            </ul>
            <Buttons/>
          </div> :
          <Button
            basic
            color='black'
            icon='thumbs outline up'
            label={{
              as: 'a',
              basic: true,
              color: 'black',
              pointing: 'left',
              content: 'Great job! You have nothing to do~'
            }}
          />
      }
      </div>)

  }
}

const mapDispatchToProps = (dispatch) => {
  return {completeTodo: (todo)=> dispatch(completeTodo(todo))}
}

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
