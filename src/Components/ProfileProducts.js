import {useContext } from 'react'

import { UserContext } from '../context/UserContext'
import React from 'react'
import { Link } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi'
import { ImFilesEmpty } from 'react-icons/im'

// import { UserContext } from '../context/UserContext'
import EachFarmProductadmin from './EachFarmProductadmin'

function ProfileProducts() {
  const {userInfo} = useContext(UserContext);

  return (
    <div className='profileproduct'>

      {userInfo.products.length === 0 && <div><ImFilesEmpty size={200} /><h1>No products uploaded yet.</h1></div>

      }
        
        {userInfo.products.length > 0 && userInfo.products.map(product => (
        <EachFarmProductadmin {...product} key={product._id} />
      ))}

      {userInfo.farmName && (
        <Link to='/uploadfarmproduct' className='uploadproduct'>
          <FiEdit size={30} />
          <p>Upload Product</p>
        </Link>
      )}
      {userInfo.storeName && (
        <Link to='/uploadstoreproduct' className='uploadproduct'>
          <FiEdit size={30} />
          <p>Upload Product</p>
        </Link>
      )}
      {userInfo.logisticsCompanyName && (
        <Link to='/uploadlogisticsvehicle' className='uploadproduct'>
          <FiEdit size={30} />
          <p>Add new vehicle</p>
        </Link>
      )}
    </div>
  )
}

export default ProfileProducts;
