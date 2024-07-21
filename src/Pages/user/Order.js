import React from 'react'
import Layout from '../../Components1/Layouts/Layout'
import UserMenu from '../../Components1/Layouts/UserMenu'

function Order() {
  return (
    <Layout title={"Dashboard - Order"}>
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <h1>All Orders</h1>
          {/* Add your category creation form or content here */}
        </div>
      </div>
    </div></Layout>
  )
}

export default Order
