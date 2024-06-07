import React from 'react'

function Header({onClick , text}) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-xl-6">
                <div className="inner-title">
                    <h1>Tast List</h1>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="inner-btn">
                    <button onClick={onClick}  text ={text} className='btn btn-primary'>+ Add Task</button>
                </div>
            </div>
        </div>
        
    </div>
 )
}

export default Header
