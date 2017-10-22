import * as React from "react";
import PropTypes from "prop-types";
import Todo from "../components/todo";
import Buttons from '../containers/buttons';
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";
import {completeTodo, deleteTodo} from "../actions/index";
import {getStateFromLocalStorage, setStateInLeancloud, setStateInLocalStorage} from "../apis/todos";
import {Button, Header, Icon, List} from "semantic-ui-react";


const styles = {
  todolistContainer: {
    marginTop: 20,
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  todolist: {
    width: 470,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  }
};

class TodoList extends Component {
  static defaultProps = {
    todos: getStateFromLocalStorage()
  }
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  }

  componentDidUpdate() {
    setStateInLocalStorage();
    setStateInLeancloud();
  }

  // handleCompleteTodo = (todo) => {
  //   this.props.completeTodo(todo);
  // }

  renderTodoList = () => (
    <div>
      <List>
        {this.props.todos.filter(({isCompleted}) =>
          isCompleted === false).map((todo) => {
          return (
            <div key={todo.id} style={styles.todolist}>
              <Todo key={todo.id} {...todo}/>
              <Button
                basic
                color="black"
                animated="vertical"
                onClick={this.props.completeTodo.bind(this, todo)}
              >
                <Button.Content hidden>Complete</Button.Content>
                <Button.Content visible>
                  <Icon name="check"/>
                </Button.Content>
              </Button>
              <Button
                basic
                color="black"
                animated="vertical"
                onClick={this.props.deleteTodo.bind(this, todo)}
              >
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                  <Icon name="delete"/>
                </Button.Content>
              </Button>
            </div>
          )
        })
        }
      </List>
      <Buttons/>
    </div>
  )

  renderEmpeyMsg = () => (
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
  )

  render() {
    return (
      <div style={styles.todolistContainer}>
        <Header as="h4" textAlign="left">
          <Icon name="tasks"/>
          List everything, to do everything
        </Header>
        {this.props.todos.filter(({isCompleted}) =>
          isCompleted === false).length !== 0 ? this.renderTodoList() : this.renderEmpeyMsg()}
      </div>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (todo) => dispatch(completeTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
