import React, { Component } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

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
          <Content></Content>
          <Layout></Layout>
        </Layout>
        <Footer style={{ zIndex: 9999, backgroundColor: '#e43d1a' }}>Footer</Footer>
      </Layout>
    );
  }
}
