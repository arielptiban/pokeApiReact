import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/_Layout';
import Home from '../pages/Home';
import Pokedex from '../pages/pokedex.jsx'
import Favorites from '../pages/favorites.jsx'
const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    <Route path='/pokedex' element={<Pokedex />} ></Route>
                    <Route path='/favorites' element={<Favorites />} ></Route>
                </Routes>
            </Layout>

        </BrowserRouter>
    );
};

export default Router;