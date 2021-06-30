import React, { Component}from 'react'
// import {Container, Typography,} from "@material-ui/core";
import FormCreate from './FormCreate';
import M from 'moment'
import { Table } from 'react-bootstrap'





let payloadNew = {
  "msoDocDate": "",
  "msoID": "",
  "msoName": "",
  "msoPeriod": "",
  "msoCreationalDTO": {
      "createdBy": "SYSTEM",
      "createdDate": M().format('DD-MM-YYYY HH:mm:ss'),
      "modifiedBy": "",
      "modifiedDate": ""
  },
  "msoDesc": "",
  "msoMaterials": [],
  "msoStatus": "",
  "msoType": ""
}
class Dashboar extends Component  {
  constructor(props) {
      super(props)
      const judul = ''
      this.state = {
          judul,
          formCreateVisible: false,
          formEditVisible: false,
          selectedIndex: null,
          dataMhs: [],
          dataTable: []
      }
  }

  componentDidMount() {
      let judul = ""
      this.getData()
      this.setState({ judul })
  }

  async getData() {
      let payload = { "limit": 10, "offset": 0, "params": {} }
      let response = await fetch('https://patlog.bitozenia.com/material/get.mso.all', {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
      })
      response = await response.json()
      if (response && response.status === 'S') {
          let dataMhs = response.data
          let dataTable = dataMhs.map((value, index) => {
              const { msoID, msoName, msoPeriod, msoDocDate } = value
              return [index += 1, msoID, msoName, msoPeriod, msoDocDate]
          })
          this.setState({ dataMhs, dataTable })
      }
  }

  openFormCreate() {
      this.setState({ formEditVisible: false, formCreateVisible: true })
  }

  openFormEdit(index) {
      this.setState({ formCreateVisible: false, formEditVisible: true, selectedIndex: index })
  }

  viewMahasiswa(index) {
      this.setState({ formviewVisible : true, selectedIndex: index })
  }

  async saveDataCreate(data) {
      let payload = {
          ...data,
          msoDocDate: M(data.msoDocDate, 'YYYY-MM-DD').format('DD-MM-YYYY')
      }
      let response = await fetch('https://patlog.bitozenia.com/material/post.mso', {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
      })
      response = await response.json()
      if (response && response.status === 'S') {
          this.getData()
      }
      this.setState({ formCreateVisible: false, formEditVisible: false })
  }

  async saveEdit(data) {
      let payload = {
          ...data,
          msoDocDate: M(data.msoDocDate, 'YYYY-MM-DD').format('DD-MM-YYYY')
      }
      delete payload.msoStatus
      delete payload.msoType
      let response = await fetch('https://patlog.bitozenia.com/material/update.mso', {
          method: 'PUT',
          headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
      })
      response = await response.json()
      if (response && response.status === 'S') {
          this.getData()
      }
      this.setState({ formCreateVisible: false, formEditVisible: false })
  }

  async deleteMahasiswa(index) {
      let payload = {
          "referenceID": this.state.dataMhs[index].msoID,
          "requestBy": "SYSTEM",
          "requestDate": "01-01-2021 09:09:09",
        }
      let response = await fetch('https://patlog.bitozenia.com/material/delete.mso', {
          method: 'DELETE',
          headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
      })
      response = await response.json()
      if (response && response.status === 'S') {
          this.getData()
      }
      this.setState({ formCreateVisible: false, formEditVisible: false })
  }



  render() {
      return (
          <div>
              <h1 style={{ textAlign: 'center' }}>{this.state.judul}</h1>
              <div id="data-tabel" >
                  <div style={{ marginRight: 10, textAlign: 'right', marginTop: 70, width:'174%'}}>
                      <button
                          type="button"
                          onClick={() => this.openFormCreate()} >
                          CREATE </button>
                  </div>
                  <Table  striped bordered hover size="sm" style={{ padding: 15, width: '177%', marginTop: 10, textAlign:'center'}}>
                      <thead>
                          <tablerow>
                            < tablecell align="left" colSpan={5}  >
                                <h2>Dashboard</h2>
                            </tablecell>
                          </tablerow>
                          <tr>
                              <th>#</th>
                              <th>Id</th>
                              <th>Customer</th>
                              <th>Ref CS Number</th>
                              <th>Doc.Date</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.dataTable.map((value, index) => {
                              return (
                                  <tr>
                                      <td >{value[0]}</td>
                                      <td >{value[1]}</td>
                                      <td >{value[2]}</td>
                                      <td >{value[3]}</td>
                                      <td >{value[4]}</td>
                                      {/* <td > */}
                                          {/* <button
                                              style={{ marginRight: 10 }}
                                              type="button"
                                              onClick={() => this.openFormEdit(index)} > EDIT
                                      </button>
                                          <button
                                              style={{ marginRight: 10 }}
                                              type="button"
                                              onClick={() => this.deleteMahasiswa(index)}>
                                              DELETE</button>

                                              
                                          <button
                                              style={{ marginRight: 10 }}
                                              type="button"
                                              onClick={() => this.viewMahasiswa(index)}>
                                              View</button> */}
                                      {/* </td> */}
                                  </tr>
                              )
                          })}
                      </tbody>
                  </Table>

              </div>

              {this.state.formCreateVisible && <FormCreate data={payloadNew} tipe="Create" close={() => this.setState({ formEditVisible: false, formCreateVisible: false })} save={(data) => this.saveDataCreate(data)} />}
              {this.state.formEditVisible && <FormCreate data={this.state.dataMhs[this.state.selectedIndex]} tipe="Edit" close={() => this.setState({ formEditVisible: false, formCreateVisible: false })} save={(data) => this.saveEdit(data)} />}
              {this.state.formviewVisible && <FormCreate data={this.state.dataMhs[this.state.selectedIndex]} tipe="View" close={() => this.setState({ formviewVisible: false})} />}
          </div>
      )
  }

}

// function Dashboard() {
//     return (
//         <div>
//             <Container>
//               <Typography variant="h3" gutterBottom>
//                 Dashboard
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 Dasboard Masih Kosong.
//               </Typography>
//             </Container>
          
//         </div>
//     )
// }

export default Dashboar;
