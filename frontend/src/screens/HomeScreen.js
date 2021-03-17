import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  ListGroupItem,
  Spinner,
} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const HomeScreen = () => {
  const [videoList, setVideoList] = useState([])
  useEffect(() => {
    if (videoList.length === 0) {
      (async () => {
        const { data } = await axios.get('/api/trending')
        setVideoList(data)
      })()
    }
  }, [videoList])

  const refreshHandler = async () => {
    await axios.get('/api/trending/update')
    setVideoList([])
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Video List</h1>
        </Col>
        <Col className='text-right'>
          <Button variant='primary' onClick={() => refreshHandler()}>
            REFRESH
          </Button>
        </Col>
      </Row>

      {videoList.length === 0 ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <ListGroup variant='flush'>
          {videoList.map((video, index) => (
              <ListGroupItem key={index}>
                <Row>
                  <Col xs={3} sm={3} md={3}>
                  <Link to={`/${video._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Image src={video.thumbnail.high.url} thumbnail />
                    </Link>
                  </Col>
                  <Col>
                    <Row>
                    <Link to={`/${video._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                      <strong>{video.title} </strong>
                      </Link>
                    </Row>
                    <p></p>
                    <Row>
                    <Link to={`/${video._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                      <h6>{video.channelTitle}</h6>
                      </Link>
                    </Row>
                    <p></p>
                    <p></p>
                    <Row>
                    <Link to={`/${video._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                      {video.description.length > 200 ? (
                        <span>{video.description.substring(0, 200)}...</span>
                      ) : (
                        <span>{video.description}</span>
                      )}
                      </Link>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default HomeScreen

