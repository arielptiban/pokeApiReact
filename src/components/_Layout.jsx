import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Container, ContentStyle } from './style';
const { Header, Content, Footer } = Layout;

const items = [{
    key: '1',
    label: <Link to="/">Home</Link>,
}, {
    key: '2',
    label: <Link to="/pokedex">Pokedex</Link>,
}];

const _Layout = ({ children }) => {


    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />

            </Header>

            <Content>
                <ContentStyle>
                    {children}
                </ContentStyle>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Máter FrontEnd ©{new Date().getFullYear()} REACT
            </Footer>
        </Layout>
    );
};
export default _Layout;