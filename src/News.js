import React, { Component } from 'react';
import './News.css'
import { Card, Container, CardTitle, CardText, CardSubtitle, CardGroup, CardFooter, CardDeck,Row, Col } from 'reactstrap';
import 'whatwg-fetch';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'al-jazeera-english': [],
      'reuters': [],
      'the-verge': [], 
      'the-new-york-times': [], 
      'the-washington-post': [],
      'wired': [], 
      'vice-news': [], 
      'the-hindu': [], 
      'nfl-news': [], 
      'ars-technica': [], 
      error: ''
    };
  }
  // DONT FORGET ATTRIBUTION LINK FOR NEWS API
  download(newsSource) {
    let src = newsSource;
    // need to get today's date: 
    //https://www.codexworld.com/how-to/get-current-date-time-using-javascript/
    let dt = new Date();
    let today = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
    console.log(today);
    // sort by popularity
    let url2 = 'https://newsapi.org/v2/top-headlines?sources=' + newsSource + '&sortBy=popularity&apiKey=f1820d94c3744a42958a0465be7d21e5';
    let req2 = new Request(url2);
    fetch(req2)
      .then((response) => {
        // console.log(response.json());
        return response.json()
      })
      .then((data) => {
        console.log(data.articles);
        this.setState({
          [src]: data.articles
        });
      }).catch((error) => {
        this.setState({
          error: error.message
        });
      });

  }

  componentDidMount() {
    console.log(this.props.newsSources);
    let newsSRC = this.props.newsSources
    for(var prop in newsSRC) {
        console.log(newsSRC[prop]);
        this.download(newsSRC[prop]);
    }
  }

  render() {
    let container = <Container> 
                        <CreateCards news={this.state['al-jazeera-english']} />
                        <CreateCards news={this.state['reuters']} />
                        <CreateCards news={this.state['the-verge']} />
                        <CreateCards news={this.state['the-new-york-times']} />
                        <CreateCards news={this.state['the-washington-post']} />
                        <CreateCards news={this.state['wired']} />
                        <CreateCards news={this.state['vice-news']} />
                        <CreateCards news={this.state['the-hindu']} />
                        <CreateCards news={this.state['nfl-news']} />
                        <CreateCards news={this.state['ars-technica']} />
                    </Container>
    return ( container );
  }
}

export default News;

export class CreateCards extends Component {
    manipulateName(nameURL) {
        let name = '';
        if(nameURL === null) {
            name = 'Not specified.'
        } else if(nameURL.includes('www')) {
            let nameURLArray = [];
            // check to see if there is more than one name
            if(nameURL.includes(',')) {
                nameURLArray = (nameURL.split(','));
            } else {
                nameURLArray.push(nameURL);
            }
            if(nameURLArray.length === 1) {
                let nameArray= nameURL.split('by/');
                // console.log(nameArray);
                if(nameArray[0].includes('www')) {
                    name = nameArray[1];
                 } else {
                    name = nameArray[0];
                }
            } else {
                nameURLArray.forEach((e) => {
                    let nameArray= e.split('by/');
                    // console.log(nameArray);
                    if(nameArray[0].includes('www')) {
                        name = name + ', ' + nameArray[1];
                    } else {
                        name = name + ', ' + nameArray[0];
                    }
                });
            }        
        } else {
            name = nameURL;
        }
        return name
      }

    // passed in an array of Articles via props
    render() {
        let data = this.props.news;
        let count = 0;
        let articles = data.map((article) => {
            count++;
            let cn = 0;
            let nameURL = article.author;
            let name = this.manipulateName(nameURL);
            return (<Card style={{width:"70%", height:"95%"}} className={article.source.id} key={article.title} body>
                        <CardTitle> <a href={article.url}> {article.title} </a> </CardTitle>
                        <CardSubtitle> <small> {name} </small> </CardSubtitle>
                        {/* <CardText> {article.description} </CardText> */}
                        {/* <CardText> <small className='text-muted'> Source: {article.source.name} </small> </CardText> */}
                    </Card>);
        });


        return (<Row>
                <CardGroup> {articles[0]} {articles[1]} {articles[2]} {articles[3]} </CardGroup>
                <CardGroup> {articles[4]} {articles[5]} {articles[6]} {articles[7]} {articles[8]} {articles[9]} </CardGroup>
                </Row>
            );
    }
}