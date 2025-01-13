import "./padding_style.scss";
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home/home';

function App() {


  return (
    <div className='bg-primaryBackground w-screen overflow-hidden'>
      <Header />

      <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
