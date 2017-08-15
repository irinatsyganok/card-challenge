import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Card from './Card';


const mockData = {
        pack: [
            {name: '6', suit: '&clubs', suitValue: 1, value: 5},
            {name: '3', suit: '&spades', suitValue: 2, value: 2},
            {name: '7', suit: '&clubs', suitValue: 1, value: 6},
            {name: 'Ace', suit: '&spades', suitValue: 2, value: 13}
        ]
    };

describe('App', () => {
    it('Should render its children', () => {
        const wrapper = shallow(
        <App>
            <h1> Page Title</h1>
            <Card />
        </App>
);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly', ()=> {
        const wrapper = shallow( <App /> );
        expect(wrapper).toMatchSnapshot();
    });

    it('should provide an onClick event as prop if Button is a button', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Button onClick={onClick} />
        );
        expect(wrapper.find('button').props().onClick).toBeDefined();
    });

})
