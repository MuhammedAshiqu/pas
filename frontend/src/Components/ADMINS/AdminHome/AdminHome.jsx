import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { DataContext } from '../../../Context/Context'
import Admin from '../AdminLogin/Admin'
import Showallusers from '../ShowAllUsers/Showallusers'
import './AdminHome.css'
import Tabl from '../AdminTable/Table'
import Datatable from '../AdminTable/Datatables'
import { useHistory } from 'react-router-dom'
import img22 from '../../../backw.jfif'


function AdminHome() {
  const [items, setitems] = useState([])
  const { Users, Cartcount, AdminTrue } = useContext(DataContext)
  const [adminTrue, setadminTrue] = AdminTrue
  const history=useHistory()
  // const getAdmindetails = () => {
  //   axios.get('http://localhost:8008/admin/signout').then((response) => {
  //     console.log(response);
  //     // setitems(response.data.products)
  //     // history.push('/admin')
  //   })
    


  // }

  useEffect(() => {
    // getAdmindetails()
    setadminTrue(true)

  }, [])
  const logout=()=>{
    axios.get('http://localhost:8008/admin/signout').then((response)=>{
      console.log(response);
      history.push('/admin')
    })
  }
  return (






    <div>
      <img src={img22} alt="" />
      <h1>Welcome to Admin Home page</h1>
      
      
      
      {/* <Datatable items={items} /> */}
      <button onClick={logout}>LOG OUT</button>
    </div>
  )
}

export default AdminHome
