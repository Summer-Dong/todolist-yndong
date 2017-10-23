import * as React from "react";
import PropTypes from "prop-types";
import Todo from "../components/todo";
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";
import {completeTodo, deleteTodo} from "../actions/index";
import {getStateFromLocalStorage, setStateInLeancloud, setStateInLocalStorage} from "../apis/todos";
import {Button, Grid, Header, Icon, List} from "semantic-ui-react";


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
    marginRight:10,
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
                color="green"
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
                color="red"
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
        })}
      </List>
    </div>
  )

  renderTodolistEmpeyMsg = () => (
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
              <Todo key={todo.id} {...todo}/>
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

  render() {
    return (
      <Grid style={styles.container}>
        <Grid.Row columns={2}>
          <Grid.Column style={styles.lists}>
            <Header as="h4" textAlign="left">
              <Icon name="tasks"/>
              List everything, to do everything
            </Header>
            {this.props.todos.filter(({isCompleted}) =>
              isCompleted === false).length !== 0 ? this.renderTodoList() : this.renderTodolistEmpeyMsg()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
