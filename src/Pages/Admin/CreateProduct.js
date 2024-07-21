import React from 'react'
import Layout from '../../Components1/Layouts/Layout'
import AdminMenu from '../../Components1/Layouts/AddMenu'

function CreateProduct() {
  return (
    <Layout title={"Dashboard - Create Product"}>
    <div className="container-fluid m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Manage Product</h1>
          {/* Add your category creation form or content here */}
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default CreateProduct
