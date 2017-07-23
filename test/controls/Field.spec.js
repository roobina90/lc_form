import React from 'react';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';
import Field from '../../src/controls/Field/Field';

describe('(Control) Field', () => {
  const wrapper = shallow(<Field />);
  it('renders as a <p>', () => {
    expect(wrapper.type()).to.eql('p');
  });

  describe('class name', () => {
    const wrapper = shallow(
      <Field name="email" type="password" />
    )
    it('should render with className lc-field', () => {
      expect(wrapper.prop('className')).to.eql('lc-field lc-field--email');
    });
  });


});
