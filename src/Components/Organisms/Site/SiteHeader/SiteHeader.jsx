import React, { Component } from 'react'
import { Title } from '@/Components/Atoms'

class SiteHeader extends Component {
  render () {
    return (
      <header className='p-4 border-b border-grey-lightgit bg-green'>
        <Title text='IvDP' />
      </header>
    )
  }
}

export default SiteHeader
