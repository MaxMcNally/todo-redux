import Counter from './Counter'
import { Provider } from 'react-redux'
import store from './../store/index'
import { render, screen } from '@testing-library/react';

describe('counter renders', ()=>{
    it('renders without crashing', ()=>{
        render(
            <Provider store={store}>
                <Counter />
            </Provider>);
    })
    it('renders text properly',()=>{
        render(
            <Provider store={store}>
                <Counter />
            </Provider>);
        expect(screen.getByText('You have 0 items on your ToDo list')).toBeInTheDocument();
        
    })
    
})