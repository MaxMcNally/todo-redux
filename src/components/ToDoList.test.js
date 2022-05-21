import ToDoList from './ToDoList'
import { Provider } from 'react-redux'
import store from './../store/index'
import { render, screen } from '@testing-library/react';

describe('ToDoList renders', ()=>{
    it('renders without crashing', ()=>{
       render(
        <Provider store={store}>
            <ToDoList />
        </Provider>);
    })
    it('renders text properly',()=>{
        render(
            <Provider store={store}>
                <ToDoList />
            </Provider>);
        expect(screen.getByText('To Do List')).toBeInTheDocument();
    })
})