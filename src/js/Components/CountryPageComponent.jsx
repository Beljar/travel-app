import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Layout } from 'antd';
import axios from 'axios';
import Container from './container/container.jsx';
import CountryInfo from './country-info/country-info.jsx';
import capitalize from '../utils/capitalize';
import VideoPlayer from './video-player/video-player.jsx';
import Gallery from './gallery/gallery.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import mainLogo from '../assets/travel.svg';
import ghImg from '../assets/github-logo.png'
import logo from '../assets/rs_school_js.svg';

const { Header, Footer, Content } = Layout;

class CountryPage extends Component {
  constructor(props) {
    super(props);
    const lang = this.props.location.search.match(/lang=(\w*)/)[1];
    this.state = {
      id: this.props.match.params.id,
      lang,
      name: '',
      description: '',
      capital: '',
      capitalLocation: {},
      imageUrl: '',
      videoUrl: '',
      currency: '',
      ISOCode: '',
      places: [],
      currentLang: this.props.lang,
    };
  }
  
  async componentDidMount() {
    const response = await axios.get(
      `https://travel-app-be.herokuapp.com/countries/${this.state.id}?lang=${this.state.lang}`
      );
      const { data } = response;
      this.setState({ ...data });
    }
        
  render() {
    return (
      <Layout>
        <Header className="header" style={{ zIndex: 9999 }}>
          <div className="mainLogo" onClick={() => history.push('/')}>
            <img className="mainLogoImage" src={mainLogo} alt="mainLogo" height="50px" width="50px" />
          </div>
        </Header>
        <Layout>
          <Content style={{ background: '#FBF9FF' }}>
            <Container>
              <CountryInfo
                country={capitalize(this.state.name)}
                capital={capitalize(this.state.capital)}
                imgUrl='https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsaWZvcm5pYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                description={this.state.description}
              />
              <VideoPlayer style={{ marginTop: 40 }} url={this.state.videoUrl} width='100%' />
              <Gallery
                style={{ marginTop: 40 }}
                items={this.state.places.map((place) => ({
                  original:
                    'https://images.unsplash.com/photo-1522961364055-ae8ee2526003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  thumbnail:
                    'https://images.unsplash.com/photo-1522961364055-ae8ee2526003?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  originalTitle: place.name,
                  description: place.description,
                }))}
              />
            </Container>
          </Content>
          <Layout>
            <Sidebar
              countryData={{
                capitalLocation: {
                  coordinates: [38.58, -121.49],
                },
                capital: 'Sacramento',
                currentLang: 'en',
                timezone: 'America/Los_Angeles',
                currency: 'USD',
              }}
            />
          </Layout>
        </Layout>
        <Footer className="footer" style={{ zIndex: 9999 }}>
          <a href="https://github.com/SuzyGRBT" target="_blank" rel="noreferrer" className="footer-item">
              <img src={ghImg} alt="Suzanna" height="20px" width="20px" style={{ marginRight: 5 }} />
              <span>SuzyGRBT</span>
          </a>
          <a href="https://github.com/Beljar" target="_blank" rel="noreferrer" className="footer-item">
              <img src={ghImg} alt="Ilia" height="20px" width="20px" style={{ marginRight: 5 }} />
              <span>Beljar</span>
          </a>
          <a href="https://github.com/conservativ007" target="_blank" rel="noreferrer" className="footer-item">
              <img src={ghImg} alt="Maksim" height="20px" width="20px" style={{ marginRight: 5 }} />
              <span>conservativ007</span>
          </a>
          <a href="https://github.com/odil-abdulloyev" target="_blank" rel="noreferrer" className="footer-item">
              <img src={ghImg} alt="Odil" height="20px" width="20px" style={{ marginRight: 5 }} />
              <span>odil-abdulloyev</span>
          </a>
          <p className="footer-item">2021</p>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer" className="footer-item">
              <img src={logo} alt="rs-school" height="30px" width="60px" />
          </a>
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(CountryPage);