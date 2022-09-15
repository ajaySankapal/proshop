import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'

import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
// import products from '../products'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <Container>
      <h1>latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' children={error} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeScreen
