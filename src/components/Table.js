import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { removeData,updateData} from "../features/registrationSlice";
import { useDispatch } from "react-redux";

export default function Table() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("bbfj",data)
  const [newformData, newsetFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
   
  });
const getLocalItems=()=>{
  let list =localStorage.getItem("list")
  console.log(list)
  if (list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}
const state=useSelector(state=>state) 
useEffect(()=>{
   localStorage.setItem("list",JSON.stringify(state.data));
},[state.data])
  return (
    <div className="basis-1/2 p-5 shadow-sm rounded ">
      <table className="border border-separate border-spacing-* border-slate-400 ">
        <thead>
          <tr className="bg-neutral-200">
            <th className="border px-4 py-2 border-slate-300">Name</th>
            <th className="border px-4 py-2 border-slate-300">Email</th>
            <th className="border px-4 py-2 border-slate-300">Button</th>
          </tr>
        </thead>
        <tbody>
          {data?.[0]
            ? data.map((ele, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2 border-slate-300">
                    {ele.firstName} {ele.lastName}
                  </td>
                  <td className="border px-4 py-2 border-slate-300">
                    {ele.email}
                  </td>
                  <td className="border flex justify-between px-4 py-2 border-slate-300 space-x-4">
                    <input
                      className="block border border-grey-light w-16 p-3 rounded mb-4"
                      type="text"
                      placeholder="firstName"
                      onChange={(e) =>
                        newsetFormData({ ...newformData, firstName: e.target.value })
                      }
                    />
                     <input
                      className="block border border-grey-light w-16 p-3 rounded mb-4"
                      type="text"
                      placeholder="lastName"
                      onChange={(e) =>
                        newsetFormData({ ...newformData, lastName: e.target.value })
                      }
                    />
                    <input
                      className="block border border-grey-light w-16 p-3 rounded mb-4"
                      type="email"
                      placeholder="email"
                      onChange={(e) =>
                        newsetFormData({ ...newformData, email: e.target.value })
                      }
                    />
                    <button
                    onClick={() => {
                        dispatch(updateData({id:ele.id,newformData}));
                      }}
                     className="bg-neutral-400 hover:bg-neutral-600 w-17 h-12 rounded text-white font-bold py-2 px-4 ">
                      Update
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeData(ele.id,));
                      }}
                      className="bg-neutral-400 hover:bg-neutral-600 w-17 h-12 rounded text-white font-bold py-2 px-4"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))
            : "no data"}
        </tbody>
      </table>
    </div>
  );
}
