import React from 'react'
import HeaderAdmin from '../../component/headerAdmin/HeaderAdmin'

const OrderAdmin = () => {
  return (
    <div><div>
    <HeaderAdmin />
    <div className="order-admin-container">
        <div className="order-admin-container-top">
            <h1>DANH SÁCH TÀI KHOẢN</h1>
            <button className="order-admin-button-new-account">
                Tạo Tài Khoản Mới
            </button>

            
        </div>

        <div className="order-admin-container-bottom">
            <table className="order-admin-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ Và Tên</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>PassWord</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {currentUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                            <td>{user.gender}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="order-admin-button-new-account">
                                    UPDATE
                                </button>
                                
                               
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>


        </div>
        
    </div>
</div></div>
  )
}

export default OrderAdmin