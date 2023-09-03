import './App.css';
import { Blog,Features,Footer,Header,Possibilities,WhatGPT3 } from './containers/index';
import { Brand,CTA,Navbar } from './components/index';

export default function App() {
    return (
        <div className='App'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibilities />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
};
