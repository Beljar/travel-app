import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Layout, Input, Select } from 'antd'
import ghImg from '../assets/GitHub-Mark.png'
import logo from '../assets/rs_school_js.svg';
import mainLogo from '../assets/travel.svg';
import LoginMenu from './LoginControls/LoginMenu.jsx';
import countryList from '../assets/countryList.jsx'
import CountryPageComponent from './CountryPageComponent.jsx';


const { Header, Content, Footer } = Layout;
const { Search } = Input;

const MainPage = () => {

    const history = useHistory()
    const onSearch = value => console.log(value);
    function handleChange(value) {
        setSelected(value)
    }

    let [selected, setSelected] = useState('ru');
    let [countries, setCountries] = useState(null);
    let [countryCards, setCountryCards] = useState(null);

    useEffect(() => {
        let url = `https://travel-app-be.herokuapp.com/countries?lang=${selected}`;

        fetch(url)
            .then(res => res.json())
            .then(json => {

                setCountries(json)
            })
    }, [selected])

    useEffect(() => {
        if (countries === null) return;

        let result = countries.map((elem, index) => {
            return (
                <div className="countryCard" key={index} onClick={() => history.push('/country')}>
                    <img className="countryImage" src={`src/js/assets/mainPage/country/${elem.imageUrl}`} width="300px" height="200px" />
                    <div className="cardHover">
                        <div className="text">{elem.name}</div>
                        <div className="text">{elem.capital}</div>
                    </div>
                </div>
            )
        })

        setCountryCards(result);
    }, [countries])

    useEffect(() => {
        console.log(countries)
    }, [countries])

    return (
        <Layout>
            <Header className="header">
                <div className="header-section">
                <Search className="search-input" placeholder="Страна или столица" allowClear onSearch={onSearch} enterButton />
                </div>
                <div className="mainLogo" onClick={() => history.push('/')}>
                    <img className="mainLogoImage" src={mainLogo} alt="mainLogo" height="50px" width="50px" />
                </div>
                <div className="header-section header-section--right">
                <Select defaultValue={selected} style={{ width: 120, margin: '1%' }} onChange={handleChange}>
                    <Option value="ru">Русский</Option>
                    <Option value="en">Английский</Option>
                    <Option value="bel">Белорусский</Option>
                </Select>
                <LoginMenu></LoginMenu>
                </div>
            </Header>
            <Content className="site-layout">
                <div className="countryCards">
                    {countryCards}
                </div>
            </Content>
            <Footer className="footer">
                <a href="https://github.com/SuzyGRBT" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={ghImg} alt="Suzanna" height="30px" width="30px" style={{ marginRight: 5 }} />
                    <span>SuzyGRBT</span>
                </a>
                <a href="https://github.com/Beljar" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={ghImg} alt="Ilia" height="30px" width="30px" style={{ marginRight: 5 }} />
                    <span>Beljar</span>
                </a>
                <a href="https://github.com/conservativ007" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={ghImg} alt="Maksim" height="30px" width="30px" style={{ marginRight: 5 }} />
                    <span>conservativ007</span>
                </a>
                <a href="https://github.com/odil-abdulloyev" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={ghImg} alt="Odil" height="30px" width="30px" style={{ marginRight: 5 }} />
                    <span>odil-abdulloyev</span>
                </a>
                <p className="footer-item">2020</p>
                <a href="https://rs.school/js/" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={logo} alt="rs-school" height="30px" width="60px" />
                </a>
            </Footer>
        </Layout>
    )
}

export default MainPage