import React, { useState  , useEffect} from 'react';
import  Header  from './componnents/header';
import MModal from "./componnents/addData.jsx"
import FormData from "./componnents/formData.jsx"
import UpdateItem from './componnents/update.jsx';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [id , setId] = useState(0)
  const [idUpdate , setIdUpdate] = useState(0)
  const [showUpdate , setShowUpdate] = useState(false)

  const handleClose = () => setShow(false);;
  const handleShow = () => setShow(true);
  
  const handleShowUpdate = (id) => {
    setIdUpdate(id)
    setShowUpdate(true)
    handleShow()
  }
  const handleShowCLose = () => {
    setShowUpdate(false)
    handleClose()
  }

  const handleDelete = (id , index) => {
    const newData = [...data]
    newData.splice(index , 1)
    setData(newData)
    var option = {
      method : 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
    }
    
    fetch('http://localhost:3000/345' + "/" + id ,option)
        .then(function(response) {
            return response.json()
        })
        .then(() => {
        })
  };

  useEffect(() => {
    if(show === false){
    fetch('http://localhost:3000/345')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        data.forEach((curr) => {
          if (parseInt(curr.id) > id)
              setId(curr.id)
        })
      })
    }
  }, [show]);

  return (
    <>
      <Header onClick={handleShow} text={"Open Modal"}/>
      <MModal show={show} id={id} handleClose={handleClose}/>
      <FormData Data={data} onDelete={handleDelete} onUpdate = {handleShowUpdate} text={"Open Modal"}/>
      <UpdateItem show={showUpdate} closeUpdate={handleShowCLose} id={idUpdate}/>
    </>
  );
}

export default App;

