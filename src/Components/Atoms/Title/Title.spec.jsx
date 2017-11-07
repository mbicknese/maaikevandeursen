/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

test('It renders the passed text', () => {
  const text = 'Title Text'
  const title = shallow(<Title text={text} />)

  expect(title.find('h1').text()).toEqual(text)
})
