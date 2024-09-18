import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const TodoTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
`;

const TodoItem = styled.li`
  background: #f8f9fa;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const TodoText = styled.span`
  font-size: 1.2rem;
  color: ${props => (props.completed ? '#28a745' : '#dc3545')};
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const Loading = styled.div`
  font-size: 1.5rem;
  color: #007bff;
  margin-top: 20px;
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading>Loading todos...</Loading>;
  if (error) return <div>Error: {error}</div>;

  return (
    <TodoContainer>
      <TodoTitle>My Todos</TodoTitle>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoText completed={todo.completed}>{todo.title}</TodoText>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
};

export default Todos;
