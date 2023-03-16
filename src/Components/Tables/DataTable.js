import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";

function DataTable(props){
  const deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/crud', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }
  }

  const items = props.items.map(item => {
    return (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.first}</td>
        <td>{item.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.location}</td>
        <td>{item.hobby}</td>
        <td>
          <div style={{width:"110px"}}>
            <ModalForm buttonLabel="Tahrirlash" item={item} updateState={props.updateState}/>
            <Button className='mx-2 px-4' color="danger" onClick={() => deleteItem(item.id)}> <BsFillTrash3Fill /></Button>
          </div>
        </td>
      </tr>
      )
    })

  return (
    <Table responsive hover>
      <thead>
        <tr className='text-success'>
          <th><BsFillPersonBadgeFill/></th>
          <th>Ism</th>
          <th>Familya</th>
          <th>Elektron pochta</th>
          <th>Telefon raqam</th>
          <th>Manzil</th>
          <th>Qiziqish</th>
          <th>Harakatlar</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
}

export default DataTable