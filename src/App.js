import React, { Component } from 'react';
import 'whatwg-fetch';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


export class App extends Component {
  render() {
    return (
      <div>
        <News />
      </div>
    );
  }
}

export default App;

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: ''
    };
  }
  // DONT FORGET ATTRIBUTION LINK FOR NEWS API
  download() {
    // Politico API
    var url = 'https://newsapi.org/v2/top-headlines?sources=politico&apiKey=f1820d94c3744a42958a0465be7d21e5';
    var req = new Request(url);
    fetch(req)
      .then(function (response) {
        console.log(response.json());
      })

    // sort by popularity
    var url2 = 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times&from=2018-07-17&to=2018-07-17&sortBy=popularity&apiKey=f1820d94c3744a42958a0465be7d21e5';
    var req2 = new Request(url2);
    fetch(req2)
      .then((response) => {
        // console.log(response.json());
        return response.json()
      })
      .then((data) => {
        console.log(data.articles);
        this.setState({
          articles: data.articles
        });
      }).catch((error) => {
        this.setState({
          error: error.message
        });
      });

  }

  componentDidMount() {
    this.download();
  }

  render() {
    let data = this.state.articles;
    console.log(data);
    let articles = data.map((article) => {
      let nameURL = article.author;
      let nameArray = nameURL.split('by/');
      let name = '';

      if (nameArray[1].includes('www')) {
        name = nameArray[2];
      } else {
        name = nameArray[1];
      }
      return (<Card body>
        <CardTitle> <a href={article.url}> {article.title} </a> </CardTitle>
        <CardText> <small> {name} </small> </CardText>
        <CardText> {article.description} </CardText>
      </Card>);
    })
    return (<Row>
      <Col sm='3'>
        {articles[0]}
      </Col>
      <Col sm='3'>
        {articles[1]}
      </Col>
      <Col sm='2'>
        <Row> {articles[2]} </Row>
        <Row> {articles[3]} </Row>
      </Col>
      <Col sm='2'>
        <Row> {articles[4]} </Row>
        <Row> {articles[5]} </Row>
      </Col>
      <Col sm='1'>
        <Row> {articles[6]} </Row>
        <Row> {articles[7]} </Row>
      </Col>
      <Col sm='1'>
        <Row> {articles[8]} </Row>
        <Row> {articles[9]} </Row>
      </Col>
    </Row>);
  }
}