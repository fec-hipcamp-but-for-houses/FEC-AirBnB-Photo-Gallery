import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App Component Test Suite', () => {
  it('App component should be defined', () => {
    expect(App).toBeDefined();
    const wrapper = shallow(<App />);
    expect(wrapper.state().hasLoaded).toBe(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});