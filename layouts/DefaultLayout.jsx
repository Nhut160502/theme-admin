import React from 'react'
import { AppFooter, AppHeader, AppSidebar } from '../components'
import { PropTypes } from 'prop-types'
import '../scss/style.scss'

const DefaultLayout = (props) => {
  const { children } = props
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">{children}</div>
        <AppFooter />
      </div>
    </>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout
