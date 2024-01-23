// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';
import ToDoListItem from './ToDoListItem';

test('renders todo-list', () => {
  render(<ToDoList data={[]} />)
  expect(screen.getByText('ToDo List')).toBeInTheDocument();
});

test('renders Add Task button', () => {
  render(<ToDoList />);
  const todoElement = screen.getByTestId('add-task-button');
  expect(todoElement).toBeInTheDocument();
});

test('should render todo id', () => {
  const todo = {
    id: 1,
    name: "Hit the gym",
    done: false
  };
  render(<ToDoListItem todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
});

test('should render todo name', () => {  
  const todo = {
    id: 2,
    name: "Wash dishes",
    done: false
  };
  render(<ToDoListItem todo={todo}/>); 
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toHaveTextContent('Wash dishes');
  expect(todoElement).toBeInTheDocument();
});

test('should render completed todo', () => {  
  const todo = {
    id: 3,
    name: "Cook rice",
    done: true
  };
  render(<ToDoListItem todo={todo}/>); 
  const todoElement = screen.getByTestId('todo-3');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toContainHTML('strike');
});

test('should render non-completed todo', () => {  
  const todo = {
    id: 4,
    name: "Fry fish",
    done: false
  };
  render(<ToDoListItem todo={todo}/>); 
  const todoElement = screen.getByTestId('todo-4');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).not.toContainHTML('strike');
});