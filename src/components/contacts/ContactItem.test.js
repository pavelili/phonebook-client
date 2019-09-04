import React from 'react';
import { shallow } from 'enzyme';
import ContactItem from './ContactItem';

describe('ContactItem component', () => {
  it('render a contact item', () => {
    const wrapper = shallow(
      <ContactItem name='George' phoneNumber='1234567890' />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
