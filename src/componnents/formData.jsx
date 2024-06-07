import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function FormData({Data  ,onDelete , onUpdate , text}){

    return(
        <div className="container">
                {Data.map((data,index) => (
                    <div className="box" key={index}>
                        <div className="row">
                            <div className="col-xl-3 col-form">{data.task}</div>
                            <div className="col-xl-3 col-form">{data.option}</div>
                            <div className="col-xl-3 col-form">
                                <div className="option2">{data.option2}</div>
                            </div>
                            <div className="col-xl-3 col-btn">
                                <div className="btn-2">
                                <button onClick={() => onUpdate(data.id)} text={text} className="btn btn-primary btn-1"><FiEdit /></button>
                                <button onClick={() => onDelete(data.id , index)} className="btn btn-danger btn-1"><MdDelete /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                                
        </div>
    )
}

export default FormData