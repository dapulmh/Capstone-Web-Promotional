import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import HomeComponent from './components/home/home';
import BackgroundComponent from './components/background/background';
import FeatureComponent from './components/feature/feature';
import FAQComponent from './components/faq/faq';
import VideosComponent from './components/videos/videos';
import ContactComponent from './components/contact/contact';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <BackgroundComponent />
      <FeatureComponent />
      <VideosComponent/>
      <FAQComponent />
      <ContactComponent/>
    </div>
  );
};

export default App;