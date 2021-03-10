import React from 'react'
import 'antd/dist/antd.css'
import { Layout, Input, Select } from 'antd'
import ghImg from '../assets/GitHub-Mark.png'
import logo from '../assets/rs_school_js.svg';
import mainLogo from '../assets/travel.svg';

const { Header, Content, Footer } = Layout; 
const { Search } = Input;

const MainPage = () => {

    const onSearch = value => console.log(value);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Layout>
            <Header className="header">
                <Search className="search-input" placeholder="Страна или столица" allowClear onSearch={onSearch} enterButton />
                    <a href="#" target="_blank" rel="noreferrer" style={{ margin: 0 }}>
                        <img src={mainLogo} alt="mainLogo" height="50px" width="50px" />
                    </a>
                <Select defaultValue="rus" style={{ width: 120, margin: '1%' }} onChange={handleChange}>
                    <Option value="rus">Русский</Option>
                    <Option value="eng">Английский</Option>
                    <Option value="blr">Белорусский</Option>
                </Select>
            </Header>
            <Content className="site-layout"></Content>
            <Footer className="footer">
                <a href="https://github.com/SuzyGRBT" target="_blank" rel="noreferrer" className="footer-item">
                    <img src={ghImg} alt="Suzanna" height="30px" width="30px" style={{ marginRight: 5 }}  />
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
