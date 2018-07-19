import React, { Component } from 'react';
import './css/Weather.css';
import 'whatwg-fetch';
import {
  Button, Card, Row, Col, CardImg, CardLink, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import codesFile from './countrycodes.json';

const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const ULR2 = "&appid=142b0b25be4201d070b187e4b67d1df4&units=imperial";

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: ""
    };
  }

  componentDidMount() {
    let temp = this;
    let code = this.fetchCountryCode(this.props.country);
    let currURL = URL + "" + this.props.city + "," + code.toLowerCase() + ULR2;
    fetch(currURL).then(function (el) {
      let temp = el.json();
      return temp;
    }).then(function (element) {
      temp.setState({
        weather: element
      })
    }).catch((error) => {
      console.log(error.message);
    })
  }

  render() {
    if (this.state.weather !== "") {
      console.log(this.state.weather);
      return (
        <div>
          <MainWeather humtemp={this.state.weather.main} sun={this.state.weather.sys} main={this.state.weather.weather} wind={this.state.weather.wind} city={this.props.city} country={this.props.country} />
          <OtherWeather city={this.props.city} country={this.props.country} />
        </div >
      );
    } else {
      return (
        <div>
        </div>
      )
    }
  }

  fetchCountryCode(country) {
    return codesFile[country].iso;
  }
}

class MainWeather extends Component {
  render() {
    let icon = "";
    let mainWeather = this.props.main[0].main;
    if (mainWeather === "Clear") {
      icon = "https://images.vexels.com/media/users/3/134787/isolated/preview/985cb8e7ee68e1bf319d875384c39bbc-smile-emoji-emoticon-by-vexels.png";
    } else if (mainWeather === "Mist") {
      icon = "http://www.transparentpng.com/download/mist/vista-weather-icons-png-16.png";
    } else if (mainWeather === "Rain") {
      icon = "http://www.transparentpng.com/download/weather-report/cloud-rain-water-lightning-nature-images-19.png";
    } else if (mainWeather === "Haze" || mainWeather === "Smoke") {
      icon = "http://moziru.com/images/mist-clipart-smoke-cloud-13.png";
    } else if (mainWeather === "Clouds") {
      icon = "http://4.bp.blogspot.com/-eW0LVSPNqGI/VeyblDyDlFI/AAAAAAAAAAg/hL_e7k1EfHQ/s1600/cloud.png";
    } else if (mainWeather === "Sunny") {
      icon = "https://cdn.pixabay.com/photo/2012/04/10/16/49/sun-26344_1280.png";
    }

    return (
      <div className="mainweather">
        <Card body inverse style={{ backgroundColor: "#00000020", borderWidth: "0" }}>
          <CardBody>
            <Row>
              <Col xs="11">
                <CardTitle>{mainWeather}</CardTitle> 
                <CardText className="temp">{this.props.humtemp.temp} º</CardText>
                <CardSubtitle>{this.props.city}, {this.props.country}</CardSubtitle>
              </Col>
              <Col xs="1">
                <CardImg top src={icon}>
                </CardImg>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
            <HumTempWinDetails humtemp={this.props.humtemp} wind={this.props.wind}/>
            <SunDetails sun={this.props.sun} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

class SunDetails extends Component {
  render() {
    let sunrise = this.getTime(this.props.sun.sunrise);
    let sunset = this.getTime(this.props.sun.sunset);
    console.log(this.props.sun)
    return (
      <Row>
        <Col xs="6">
          <CardText>Sunrise: {sunrise}</CardText>
        </Col>
        <Col xs="6">
          <CardText>Sunset: {sunset}</CardText>
        </Col>
      </Row>
    )
  }

  getTime(given) {
    var date = new Date(given * 1000);
    let ap = "pm";
    let time = date.getHours();
    if (time < 12) {
      ap = "am";
    } else {
      time = time - 12;
    }
    let formattedTime = time + ':' + ("0" + date.getMinutes()).substr(-2) + ap;
    return formattedTime;
  }
}

class HumTempWinDetails extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col xs="6">
          <CardText>High: {this.props.humtemp["temp_max"]}ºF</CardText>
        </Col>
        <Col xs="6">
          <CardText>Low: {this.props.humtemp["temp_min"]}ºF</CardText>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <CardText>Humidity: {this.props.humtemp.humidity}%</CardText>
        </Col>
        <Col xs="6">
          <CardText>Wind Speed: {this.props.wind.speed}mps</CardText>
        </Col>
      </Row>
      </div>
    )
  }
}

class OtherWeather extends Component {
  render() {
    let arr = ["San Francisco", "New York City"]
    let weatherItems = arr.map((element) => {
      return (
        <OtherWeatherItems name={element} key={element} />
      )
    })
    return (
      <div className="otherweather">
        <Row>
          {weatherItems}
        </Row>
      </div>
    )
  }
}

class OtherWeatherItems extends Component {
  render() {
    return (
      <div className="otherweatheritem">
        <Col>
          <Card body inverse style={{ backgroundColor: "#00000020", borderWidth: "0" }}>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText className="othercountry">United States</CardText>
            <Button>Check Weather</Button>
          </Card>
        </Col>
      </div>
    )
  }
}

export default Weather;
