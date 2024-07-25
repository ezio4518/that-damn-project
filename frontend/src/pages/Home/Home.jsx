import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProduct from '../../components/ExploreProduct/ExploreProduct'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreProduct category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
    </div>
  )
}

export default Home