import React from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default function SignedInMenu({signOut}) {
  return (
        <Menu.Item position="right">
          <Image avatar spaced="right" src='/assets/user.png' />
          <Dropdown pointing="top left" text="Username">
            <Dropdown.Menu>
              <Dropdown.Item text="Create Event" icon="plus" />
              <Dropdown.Item text="My Events" icon="calendar" />
              <Dropdown.Item text="My Network" icon="users" />
              <Dropdown.Item text="My Profile" icon="user" />
              <Dropdown.Item text="Settings" icon="settings" as={NavLink} to="/settings"/>
              <Dropdown.Item text="Sign Out" icon="power" onClick={signOut}/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
  )
}
