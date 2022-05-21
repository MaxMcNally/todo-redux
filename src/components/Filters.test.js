import Filters from './Filters'
import { Provider } from 'react-redux'
import store from './../store/index'
import { render, screen } from '@testing-library/react';

describe('filters renders', ()=>{
    it('renders without crashing', ()=>{
        render(
            <Provider store={store}>
                <Filters />
            </Provider>);
    })
    it('renders text properly',()=>{
        render(
            <Provider store={store}>
                <Filters />
            </Provider>);
        expect(screen.getByText('Filter By:')).toBeInTheDocument();
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Active')).toBeInTheDocument();
        expect(screen.getByText('Finished')).toBeInTheDocument();
    })
    
})