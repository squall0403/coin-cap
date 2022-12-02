import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { apiURL } from '../utilities/constant'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import LoadingSpinner from './spinner';

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [isLoaded, setLoaded] = useState([])
  useEffect(() => {
    setLoaded(true)
    async function getTodos() {
      try {
        const response = await axios.get(`${apiURL}/todos`,{
          params:{
            completed:false
          }
        })
        setTodos(response.data)
        setTimeout(() => {
          setLoaded(false)
        }, 500);
        return;
      } catch (error) {
        console.log(error.message);
        setTimeout(() => {
          setLoaded(false)
        }, 500);
      }
    }
    getTodos();
    return;
  }, [todos.length])
  const totalFalse = todos.filter(todo => todo.completed === false).length

  const TodoList = () => {
    const deleteTodo = async (id) => {
      try {
        await axios.delete(`${apiURL}/posts/${id}`)        
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    }
    return (
      todos.map((todo) => {
        const todoStyle = {
          textDecoration: todo.completed ? 'line-through' : 'none'
        }
        return (
          <tr key={todo.id} style={todoStyle}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed.toString()}</td>
            <td><Button variant="outline-danger"><span className="material-symbols-outlined" onClick={() => deleteTodo(todo.id)}>
              delete
            </span></Button></td>
          </tr>
        )
      })
    )
  }
  return (
    <Fragment>
      {isLoaded ? <LoadingSpinner></LoadingSpinner> : ''}
      <Container>
        <h1>Todo: </h1><h2>{totalFalse}</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TodoList></TodoList>
          </tbody>
        </Table>
      </Container>
    </Fragment>

  )
}

export default Todo