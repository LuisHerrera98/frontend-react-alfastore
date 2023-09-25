import React from 'react'
import Header from '../components/Header/Header'
import CategorySection from '../components/Category/CategorySection'
import { useParams } from 'react-router-dom'


const Category = () => {
    
    const {id} = useParams();
    
  return (
    <div>
        <Header />
        <CategorySection id={id}/>
    </div>
  )
}

export default Category