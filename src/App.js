import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export const App = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <ToastContainer />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
