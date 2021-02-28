import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';

import Header from '../../Components/HeaderComponent/Header';
import Footer from '../../Components/FooterComponent/Footer';
import Content from '../../Components/ContentComponent/Content';

class Layout extends Component {
    render(){
        return(
            <Auxiliary>
                <Header />
                    <Content />
                <Footer />
            </Auxiliary>
        );
    }
}

export default Layout;
