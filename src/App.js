import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header title="Header" description="Header description"/>
      <Layout title="Layout 1" description="Layout 1 description"/>
      <Layout title="Layout 2" description="Layout 2 description"/>
      <Layout backgroundColor="red" title="Layout 3" description="Layout 3 description"/>
      <Footer />
    </div>
  );
}

export default App;
