import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Users',
        to: '/users',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User',
        to: '/registry',
      },
    ],
  },
]

export default _nav
