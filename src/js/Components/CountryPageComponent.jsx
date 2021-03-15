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

const { Header, Footer, Content } = Layout;

class CountryPage extends Component {
  constructor(props) {
    super(props);
    const lang = this.props.location.search.match(/lang=(\w*)/)[1];
    this.state = {
      id: this.props.match.params.id,
      lang,
      name: '',
      nameEn: '',
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
        <Header style={{ zIndex: 9999 }}>Header</Header>
        <Layout>
          <Content>
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
                    `public/assets/images/${this.state.name}/${place.imageUrl}`,
                    thumbnail:
                    `public/assets/images/${this.state.name}/${place.imageUrl}`,
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
                  coordinates: this.state.capitalLocation.coordinates,
                },
                capital: this.state.capital,
                currentLang: this.state.lang,
                timezone: 'America/Los_Angeles',
                currency: 'USD',
              }}
            />
          </Layout>
        </Layout>
        <Footer style={{ zIndex: 9999, backgroundColor: '#e43d1a' }}>Footer</Footer>
      </Layout>
    );
  }
}

export default withRouter(CountryPage);