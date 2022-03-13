import React from 'react'
import axios from 'axios'
import './Adminheader.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Adminheader() {
  const history = useHistory()

  const logout = () => {
    axios.get('http://localhost:8008/admin/signout').then((response) => {
      console.log(response);
      history.push('/admin')
    })
  }
  return (

    // <div className="mainhead">
    //   <div className='left'>
    //     {/* <h1>Admin Page</h1>   */}
    //   </div>
    //   <div className='right' >
    //     {/* <Link to='/admins' ><button>-</button></Link>  */}
    //     <Link to='/adminhome' > <button  >Product</button> </Link>
    //     <Link to='/getallusers' > <button>User</button></Link>
    //     <Link to='/allorders' > <button>Orders</button></Link>
    //     <Link to='/service' ><button>addService</button></Link>
    //     <Link to='/admin' ><button onClick={logout}>LOGOUT</button></Link>




    //   </div>
    // </div>

    <div class="admin-panel clearfix">
      <div class="slidebar">
        <div class="logo">
          <a href=""></a>
        </div>
        <ul>
          <li><Link to='/adminhome' >Product</Link></li>
          <li><Link to='/getallusers' > User</Link></li>
          <li><Link to='/allorders' > Orders</Link></li>
          <li><Link to='/ViewService' >Service</Link></li>
          <li><Link to='/service' >Add Service</Link></li>
          <li><Link to='/admin' onClick={logout}>Logout</Link></li>
        </ul>
        
      </div>

      <div className="table">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dom</td>
            <td>6000</td>
        </tr>
        <tr class="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr>
       
    </tbody>
</table>

      </div>


    </div>

  )
}

export default Adminheader;
