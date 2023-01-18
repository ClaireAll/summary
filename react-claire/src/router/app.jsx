import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';

export class App extends Component {
    render() {
        return (
            <div>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        );
    }
}