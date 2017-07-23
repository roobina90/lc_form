import React from 'react';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';
import App from '../../src/containers/App/App';

describe('(Container) App', () => {
  const wrapper = shallow(<App />);

  // describeWithDOM('Lifecycle methods', () => {
  //    mount(<App />);

  //   it('initial state - form content is empty', () => {
  //     expect(App.state().formContent).to.eql(null);
  //   });
  // });
  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  describe('when active...', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <App />
    )
    it('should render with className active-list', () => {
      expect(wrapper.prop('className')).to.eql('lc-app');
    });
  });


});
