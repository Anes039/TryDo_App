import MainHeader from './components/MainHeader/MainHeader';
import './App.css';
import About from './components/About/About';
import Service from './components/Service/Service';
import OurWork from './components/OurWorks/OurWorks';
import CompanyStaff from './components/CompanyStaff/CompanyStaff';
import Footer from './components/Footer/Footer';
function App() {
  const items = [{
    img:'https://trydo.rainbowit.net/assets/images/icons/icon-01.png',
    title:'Business Stratagy',
    text:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    img:'https://trydo.rainbowit.net/assets/images/icons/icon-02.png',
    title:'Website Development',
    text:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    img:'https://trydo.rainbowit.net/assets/images/icons/icon-03.png',
    title:'Marketing & Reporting',
    text:'TThere are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  }
]
  return (
    <div className="App">
        <MainHeader items={items} />
        <About />
        <Service />
        <OurWork />
        <CompanyStaff />
        <Footer />
    </div>
  );
}

export default App;
