import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Spinner,
} from "react-bootstrap";
const VideoDetailScreen = ({ match }) => {
  const [videoDetail, setVideoDetail] = useState({});
  useEffect(() => {
    if (Object.keys(videoDetail).length === 0) {
      (async () => {
        const id = match.params.id;
        const { data } = await axios.get(`/api/trending/${id}`);
        setVideoDetail(data);
      })();
    }
  }, [videoDetail, match]);
  return (
    <>
      {Object.keys(videoDetail).length === 0 ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <>
          <br />
          <Row
            className="align-items-center fluid"
            style={{ width: 900, height: "auto" }}
          >
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe
                className="container"
                src={`https://www.youtube.com/embed/${videoDetail.videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                title="Embedded youtube"
              />
            </ResponsiveEmbed>
          </Row>
          <br />
          <ListGroup>
            <ListGroupItem>
              <Row className="align-items-center">
                <Col>
                  <h4>{videoDetail.title} </h4>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col> {videoDetail.viewCount} views</Col>
                <Col>
                  {videoDetail.likes} likes . {videoDetail.dislikes} dislikes
                </Col>
              </Row>
              <br />
              <Row className="align-items-center">
                <Col sm="10">{videoDetail.description}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row className="align-items-center">
                <Col xs={2}>
                  <Image
                    src={videoDetail.channelThumbnail.default.url}
                    roundedCircle
                    thumbnail
                  />
                </Col>
                <Col xs={4}>
                  <Row>
                    <h4>{videoDetail.channelTitle}</h4>
                  </Row>
                  <Row>{videoDetail.subscribers} subscribers</Row>
                </Col>
              </Row>
              <Row className="align-items-center">
              <Col sm="10">{videoDetail.channelDescription}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </>
      )}
    </>
  );
};

export default VideoDetailScreen;
