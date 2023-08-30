// import { useState } from 'react'
// import { BsTrash3 } from "react-icons/bs";
// import { BsPencil } from "react-icons/bs";

// export const TodoBody = ({ isDone, task, remove, id, setTodos, todos }) => {
//     const [editText, setEditText] = useState(task)
//     const [onEdit, setOnEdit] = useState(false)

//     const handleEdit = () => {
//         if (!onEdit) {
//             setOnEdit(true)
//         } else {
//             setTodos(todos.filter((item) => {
//                 if (item.id === id) {
//                     return { ...item, task: editText }
//                 }
//                 return item
//             }))
//             setOnEdit(false)
//         }
//     }

//     const handleChecked = () => {
//         setTodos(todos.map((el) => {
//             if (el.id === id) {
//                 return { ...el, isDone: !el.isDone }
//             }
//             return el
//         }))
//     }
//     return (

//         <div className='icons' style={{ justifyContent: "space-evenly", backgroundColor: "white", height: '74px', width: '332px', display: 'flex', alignItems: 'center', border: '2px solid', borderColor: 'white' }}>
//             <input type="checkbox" checked={isDone} onChange={handleChecked} />
//             <input style={{ color: "#50566B", font: 'sans-serif', border: onEdit ? "1px solid black" : "none " }} type="text" value={editText} onChange={(e) => {
//                 setEditText(e.target.value)
//             }} />
//             <BsPencil color='#A8ACBC' onClick={handleEdit} />
//             <BsTrash3 color='#A8ACBC' onClick={() => remove(id)} />
//         </div>

//     )
// }

