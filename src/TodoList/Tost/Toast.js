import React, { useContext } from "react";
import "./Toast.css";
import UseContext from '../../Context/UseContext'

export default function Toast() {
  
  const contextData=useContext(UseContext)
  
  return (
    <div className={` ${contextData.isShowToast?"active":"" } toast-container position-fixed`}>
      <div className="toast show   text-white bg-success">
        <div className="toast-box">
          <button type="button" className="btn-close btn-close-wsite ms-3" onClick={()=>contextData.setIsShowToast(false)}/>
          <div className="toast-body">
            تودو ی مورد نظر با موفقیت ثبت شد
          </div>
        </div>
      </div>
    </div>
  );
}
