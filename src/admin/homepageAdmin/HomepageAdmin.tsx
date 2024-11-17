import React from 'react'
import SideBarAdmin from '../component/sidebarAdmin/SideBarAdmin'
import HeaderAdmin from '../component/headerAdmin/HeaderAdmin'

import FooterAdmin from '../component/footerAdmin/FooterAdmin'
import UserAccount from '../adminpages/UserAccount/UserAccount'
import ProductAdmin from '../adminpages/ProductAdmin/ProductAdmin'

const HomepageAdmin = () => {
  return (
    <div>
        <HeaderAdmin />
        <UserAccount />
        <ProductAdmin />
        {/* <FooterAdmin /> */}
    </div>
  )
}

export default HomepageAdmin