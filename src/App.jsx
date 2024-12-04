import './App.css'
import { useState } from 'react';
export default function App(){
  let [addModal,setAddModal] = useState(false)
  let [data,setData] = useState ([
    {
      name:"Azamat",
      age:"11",
      id:"1"
    },
    {
      name:"Anush",
      age:"16",
      id:"2"
    },{
      name:"abdurashidi kal",
      age:"16",
      id:"3"
    }
  ])
  let [editModal,setEditModal] = useState(false)
  let [inpEditName,editUserName] = useState("")
  let [inpEditAge, editUserAge] = useState("")
  let [idx,setIdx] = useState(null)
  let [inpAddName,addUserName]= useState("")
  let [inpAddAge, addUserAge] = useState("")
  let [state, setState ] = useState("")
  //Edit User   
  function edit(){
    data.map((el)=>{
      if(el.id == idx){
        el.name = inpEditName
        el.age = inpEditAge

      }
      return el
    })
  }
  function add(){
    data.push({name:inpAddName,age:inpAddAge,id:data.length})
    setData(data)
  }
  function del(id){
    setData(data.filter(e => e.id != id))
  }
  return (
    <div>
      <input value={state} onChange={(e) => setState(e.target.value)} type="text" />
      {addModal && (
        <dialog open>
          <input value={inpAddName} onChange={(e) => addUserName(e.target.value)} type="text" placeholder="Name" />
          <input value={inpAddage} onChange={(e) => addUserAge(e.target.value)} type="text" placeholder="Age" />
          <button onClick={() => {setAddModal(false),add()}}>Save</button>
          <button onClick={() => setAddModal(false)}>Close</button>
        </dialog>
      )}
        {editModal && (
        <dialog open>
          <input value={inpEditName} onChange={(e) => editUserName(e.target.value)} type="text" placeholder="Name" />
          <input value={inpEditAge} onChange={(e) => editUserAge(e.target.value)} type="text" placeholder="Age" />
          <button onClick={() => {setEditModal(false),edit()}}>Save</button>
          <button onClick={() => setEditModal(false)}>Close</button>
        </dialog>
      )}
      {console.log(addModal)}
      <button onClick={() => setAddModal(true)}>Add</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {  data.filter((e) => {
    if(e.name.includes(state) || e.age.includes(state) || e.id.includes(state)){
        return e;
    }
}).map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td><button onClick={() => del(e.id)}>del</button><button onClick={() => {setEditModal(true),   editUserName(e.name), editUserAge(e.age
              ), setIdx(e.id)}}>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}