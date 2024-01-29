import React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from './store';
import { fetchAllCategories } from './store/categoriesSlice';
import { fetchAllItems } from './store/itemSlice';
import { Outlet } from "react-router-dom";
import {Template} from './pages/Template';
import ReactModal from 'react-modal';
import { AppContext } from "./AppContext";
import './main.css';
import './inline.css';
import './frontend.css';
import './grid.min.css';
import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

    const handleModalClose = () => {
      setIsModalOpen(false);
      setModalContent('');
    }

    const dispatch = useDispatch();
    const categories = useSelector(((state) => state.categories));
    const items = useSelector(((state) => state.items));
    console.log('categories', categories);

    React.useEffect(() => {
        console.log('effec fetch categories');
        if (categories.loading === 'idle') {
            dispatch(fetchAllCategories());
        }

        if (items.loading === 'idle') {
            dispatch(fetchAllItems());
        }
    }, []);

  return (
    <>
    <AppContext.Provider value={{isModalOpen, setIsModalOpen, setModalContent}}>
        <Template>
          <Outlet />
        </Template>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
        >
          <div>{modalContent}</div>
        </ReactModal>
      </AppContext.Provider>
    </>
  );
}

export default App;
