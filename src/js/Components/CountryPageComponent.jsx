import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Container from './container/container.jsx';
import CountryInfo from './country-info/country-info.jsx';
import capitalize from '../utils/capitalize';

const { Header, Footer, Content } = Layout;

export default class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      capital: '',
      capitalLocation: {},
      imageUrl: '',
      videoUrl: '',
      currency: '',
      ISOCode: '',
      places: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://travel-app-be.herokuapp.com/countries/${this.props.countryId}?lang=${this.props.lang}`
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
            </Container>
          </Content>
          <Layout></Layout>
        </Layout>
        <Footer style={{ zIndex: 9999, backgroundColor: '#e43d1a' }}>Footer</Footer>
      </Layout>
    );
  }
}
