/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import SiteHeader from './SiteHeader'
import { Title } from '@/Components/Atoms'

test('It has the required components', () => {
  const siteHeader = shallow(<SiteHeader text='' />)

  expect(siteHeader.find(Title).length).toEqual(1)
})
