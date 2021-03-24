import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from 'react-select'

const data = require('./sampleData.json')

export default function reportform() {
    const [records, setRecords] = useState([])

    useEffect(() => { 
        let t = 0
        let r = data.map((d,i) => {
            t += d.amount
    
            return (
              <tr>
                <td>{i+1}</td>
                <td>{d.Name}</td>
                <td>{d.Phone}</td>
                <td>{d.Arrival}</td>
                <td>{d.Departure}</td>
                <td>{d.Reason}</td>
                <td>{d.CreatedAt}</td>
              </tr>
            )
        })
    
        setRecords(r)
        setTotal(t)

    },
    [data])
  
    const handleCategoryFilterChange = (obj) => {
        console.log('filter',obj)
        let t = 0
        let filteredData = data.filter(d => obj.id == 0 || d.category.id == obj.id)
        let r = filteredData.map((d,i) => {
            t += d.amount
            return (
              <tr>
                <td>{i+1}</td>
                <td>{d.createdAt}</td>
                <td>{d.description}</td>
                <td>{d.category.name}</td>
                <td>{d.amount}</td>
              </tr>
            )
        })
        setRecords(r)
        setTotal(t)
    }

    return (
    <Container>
      <Row>
        <Col>
        <h1>Journal</h1>
        </Col>

      </Row>

      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Arrival Time</th>
      <th>Departure Time</th>
      <th>Reason</th>
      <th>Created At</th>
    </tr>
  </thead>
  <tbody>
      {records}
  </tbody>
  <tfoot>
    <td colSpan={5}> 
    </td>
  </tfoot>
</Table>
</Container>


    )
  }