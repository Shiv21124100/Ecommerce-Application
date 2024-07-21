import React, { useEffect, useState } from 'react';
import Layout from '../../Components1/Layouts/Layout';
import AdminMenu from '../../Components1/Layouts/AddMenu';
import axios from 'axios';
import toast from "react-hot-toast";

function CreateCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []); // Empty dependency array means this effect runs once after mount

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Something went wrong while fetching categories.");
    }
  };


  return (
    <Layout title="Dashboard - Create Category">
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
              {/* Add your category creation form or content here */}
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category._id}>
                      <td>{category.name}</td>
                      <td>
                        <button className="btn btn-primary ms-2">
                          Edit
                        </button>
                        {/* Add other action buttons as needed */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateCategory;
