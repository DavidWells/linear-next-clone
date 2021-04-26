import React from 'react'

import { Meta } from '@storybook/react'

import SearchBox from './SearchBox'

export default {
  component: SearchBox,
  title: 'SearchBox',
} as Meta

export const Default = () => <SearchBox placeholder="Search" />
