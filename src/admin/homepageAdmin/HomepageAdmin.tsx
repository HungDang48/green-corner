import React from 'react'
import SideBarAdmin from '../component/sidebarAdmin/SideBarAdmin'
import HeaderAdmin from '../component/headerAdmin/HeaderAdmin'

import FooterAdmin from '../component/footerAdmin/FooterAdmin'
import UserAccount from '../adminpages/UserAccount/UserAccount'

const HomepageAdmin = () => {
  return (
    <div>
        <HeaderAdmin />
        <UserAccount />
        {/* <FooterAdmin /> */}
    </div>
  )
}

export default HomepageAdmin