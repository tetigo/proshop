import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {

  const [products, fetchProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('/api/products')
      fetchProducts(data)
    }
    getProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(prod => (
          <Col id={prod._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={prod} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
