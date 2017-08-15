import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';


describe('Card', () => {
      const card = {suit: '&spades', name: 'ace'};
    it('Should render a name', () => {
        const wrapper = shallow(<Card card={card}/>);
        expect(wrapper.find('.card').text()).toEqual('ace');
    });

     it('should render correctly', () => {
        const wrapper = shallow(<Card card={card} />);
        expect(wrapper).toMatchSnapshot();
    });
});