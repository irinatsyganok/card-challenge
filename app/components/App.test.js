import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Card from './Card';

    const pack = [
            {name: '6', suit: '&clubs', suitValue: 1, value: 5},
            {name: '3', suit: '&spades', suitValue: 2, value: 2},
            {name: '7', suit: '&clubs', suitValue: 1, value: 6},
            {name: 'Ace', suit: '&spades', suitValue: 2, value: 13}
        ];

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

    it('should provide an onClick event as prop for a button', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <button onClick={onClick} />
        );
        expect(wrapper.find('button').props().onClick).toBeDefined();
    });

    it('calls shuffle with selected cards', () => {
        const wrapper = shallow(<App />);
        const mocked = wrapper.instance().shuffle = jest.fn();
        mocked(pack);

        expect(wrapper.instance().shuffle).toHaveBeenCalled();
        expect(wrapper.instance().shuffle).toBeCalledWith(pack);
    });
    
    it('shuffles the deck', () => {
        const wrapper = mount(<App />);
        
        const preShuffle = [...wrapper.node.state.pack];
        const postShuffle = wrapper.node.state.pack;

        const button = wrapper.find('button .shuffle');
        button.simulate('click');

       //check contents of preShuffle and postShuffle
        const identical = preShuffle.every(function(element, index) {
            return element === postShuffle[index]; 
        });

        expect(identical).toBeFalsy();
    });

    it('sorts cards by value', () => {
        const wrapper = mount(<App />);
        wrapper.instance().setState(pack);
        
        const mocked = wrapper.instance().sortCardsByValue = jest.fn();
        mocked(pack);
        
        const postSort = wrapper.instance().state;
        
        function isSorted(array) {
            var len = array.length - 1;
            for(var i = 0; i < len; ++i) {

                if(array[i].value > array[i+1].value) {
                    return false;
                }
            }
            return true;
        }

        expect(isSorted(postSort)).toBeTruthy();
    });

    it('sorts cards by suit', () => {
            const wrapper = mount(<App />);
            wrapper.instance().setState(pack);
            
            const postSort = wrapper.instance().state;
            
            function isSorted(array) {
                var len = array.length - 1;
                for(var i = 0; i < len; ++i) {

                    if(array[i].suitValue > array[i+1].suitValue) {
                        return false;
                    }
                }
                return true;
            }
            expect(isSorted(postSort)).toBeTruthy();
        });

    it('calls sortCardsBySuit with selected cards', () => {
        const wrapper = shallow(<App />);
        const mocked = wrapper.instance().sortCardsBySuit = jest.fn();
        mocked(pack);

        wrapper.update();

        expect(wrapper.instance().sortCardsBySuit).toBeCalled();
        expect(wrapper.instance().sortCardsBySuit).toBeCalledWith(pack);
    });

     it('calls sortCardsByValue with selected cards', () => {
        const wrapper = shallow(<App />);
        const mocked = wrapper.instance().sortCardsByValue = jest.fn();
        mocked(pack);

        expect(wrapper.instance().sortCardsByValue).toBeCalled();
        expect(wrapper.instance().sortCardsByValue).toBeCalledWith(pack);
    });

});
