import * as React from "react";
import PropTypes from "prop-types";
import TodoInput from "../components/todoInput";
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";
import {completeTodo, deleteTodo, setInitialState} from "../actions/index";
import {Button, Grid, Header, Icon, List} from "semantic-ui-react";
import { getStateFromLeanCloud} from "../apis/todos";
import CompleteTodoButton from '../components/completeTodoButton';
import DeleteTodoButton from '../components/deleteTodoButton';

const styles = {
  container: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
  },
  lists: {
    border: '1px solid #bcbdbd',
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },
  todolist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  }
};

class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  static defaultProps = {
    todos: []
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        objectId: PropTypes.string,
      }).isRequired
    ).isRequired
  }

  componentDidMount() {
    getStateFromLeanCloud()
      .then((initialState) => {
        this.setState({isLoading: false})
        this.props.setInitialState(initialState);
      });
  }

  renderTodoList = () => (
    <div>
      <List>
        {this.props.todos.filter(({isCompleted}) =>
          isCompleted === false).map((todo) => {
          return (
            <div key={todo.id} style={styles.todolist}>
              <TodoInput {...todo}/>
              <CompleteTodoButton todo={todo}/>
              <DeleteTodoButton todo={todo}/>
            </div>
          )
        })}
      </List>
    </div>
  )

  renderTodolistEmptyMsg = () => (
    <Button
      basic
      color='green'
      icon='thumbs outline up'
      label={{
        as: 'a',
        basic: true,
        color: 'green',
        pointing: 'left',
        content: 'Great job! You have nothing to do~'
      }}
    />
  )

  renderCompletedTodolist = () => (
    <div>
      <List>
        {this.props.todos.filter(({isCompleted}) =>
          isCompleted === true).map((todo) => {
          return (
            <div key={todo.id} style={styles.todolist}>
              <TodoInput key={todo.id} {...todo}/>
            </div>
          )
        })
        }
      </List>
    </div>
  )

  renderCompletedTodolistEmpeyMsg = () => (
    <Button
      basic
      color='black'
      icon='info'
      label={{
        as: 'a',
        basic: true,
        color: 'black',
        pointing: 'left',
        content: 'Oops, seems you have done nothing ...'
      }}
    />
  )

  renderData = () => {
    return (
      <Grid style={styles.container}>
        <Grid.Row columns={2}>
          <Grid.Column style={styles.lists}>
            <Header as="h4" textAlign="left">
              <Icon name="tasks"/>
              List everything, to do everything
            </Header>
            {this.props.todos.filter(({isCompleted}) =>
              isCompleted === false).length !== 0 ? this.renderTodoList() : this.renderTodolistEmptyMsg()}
          </Grid.Column>
          <Grid.Column style={styles.lists}>
            <Header as="h4" textAlign="left">
              <Icon name="tasks"/>
              Your achievement is here~
            </Header>
            {this.props.todos.filter(({isCompleted}) =>
              isCompleted === true).length !== 0 ? this.renderCompletedTodolist() : this.renderCompletedTodolistEmpeyMsg()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  render() {
    return (this.state.isLoading ? <p>数据加载中……</p> : this.renderData())
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (todo) => dispatch(completeTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    setInitialState: (initialState) => dispatch(setInitialState(initialState))
  }
}

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
