import React , {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function UpdateItem({show , closeUpdate , id}) {
    const [option , setOption] = useState(null)
    const [task, setTask] = useState('');
    const [option2 , setOption2] = useState(null)
    const [button, setButton] = useState({
      buttonHigh: false,
      buttonMedium: false,
      buttonLow: false
    });
    const [data, setData] = useState([])

    const toggleColor = (button) => {
      setButton({
        buttonHigh: false,
        buttonMedium: false,
        buttonLow: false,
        [button]: true
      });
    };
    console.log(id);
    const handleClick = (e , value1 , value2 , value3) => {
        e.preventDefault();
        toggleColor(value3)
        if (option === value1){
            setOption(null)
        }
        else{
            setOption(value1)
            setOption2(value2)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
          id : id,
          task : task,
          option : option,
          option2 : option2
        };
        setData([...data, newData]);
        fetch('http://localhost:3000/345' + "/" + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        })
          .then((response) => response.json())
          closeUpdate()
        };

  return (
    <div>
        <Modal show={show} onHide={closeUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={closeUpdate}>
            <div className="form-group">
                <label htmlFor="Task">Task</label>
                <input type="text" name="txtTask" id="task" placeholder='Type your task here' className='form-control' value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="Priority">Priority</label>
                <div className="inner-btn-item">
                    <button type='radio' key={'High'} className='btn btn-primary' style={{ backgroundColor: button.buttonHigh ? 'yellow' : 'blue' , color: button.buttonHigh ? 'Black' : 'White'}} onClick={(e) => handleClick(e , 'High' , 'To Do' , 'buttonHigh')}>High</button>
                    <button type='radio' key={'Medium'} className='btn btn-primary' style={{ backgroundColor: button.buttonMedium ? 'yellow' : 'blue' , color: button.buttonMedium ? 'Black' : 'White'}} onClick={(e) => handleClick(e , 'Medium' , 'Done' ,'buttonMedium')}>Medium</button>
                    <button type='radio' key={'Low'} className='btn btn-primary' style={{ backgroundColor: button.buttonLow ? 'yellow' : 'blue' , color: button.buttonLow ? 'Black' : 'White'}} onClick={(e) => handleClick(e , 'Low' , 'In Progress' , 'buttonLow')}>Low</button>
                </div>
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit' onClick={handleSubmit} variant="primary">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default UpdateItem