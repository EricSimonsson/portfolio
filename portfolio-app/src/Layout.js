import Header from './Components/Header';
import Home from './Pages/Home';
/**
 * @author Eric Simonsson
 */
const Layout = () => {
  return (
    <>
        <div className="Layout">
          <Header/>
          <Home/>
        </div>
    </>
  )
};

export default Layout;