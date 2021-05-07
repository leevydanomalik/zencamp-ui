import React, { Component } from 'react'
// import { Table } from 'react-bootstrap'




class ListMaterial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataMaterial:[]
    }
  }

  componentDidMount(){
    this.getmaterial()
  }

  async getmaterial(){
    let payload = { "limit": 10, "offset": 0, "params": {} }
    let response = await fetch ('https://patlog.bitozenia.com/material/get.material.all', {
      method:'POST',
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    })
    response = await response.json()
    if (response && response.status === 'S') {
      let dataList = response.data
      this.setState({dataMaterial:dataList})
    console.log(dataList)
    }


  }


  render (){
    return (
        <div >
          <table cellSpacing='0' style={{ padding: 15, width: '133%', marginTop: 70, textAlign:'center'}}>
          {/* striped bordered hover size="sm" style={{ padding: 15, width: '300%', marginTop: 70, textAlign:'center'}} */}
            <thead>
              <tablerow>
                < tablecell align="left" colSpan={5}  >
                  <h2>List Material</h2>
                </tablecell>
              {/* <tablecell align="right">Price</tablecell> */}
              </tablerow>
              <tr>
                <th>Material ID</th>
                <th>Material Kimap</th>
                <th>Material Name</th>
                <th>Material UoM</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataMaterial.map((value, index) => {
                return(
                  <tr>
                    <td>{value.materialID}</td>
                    <td>{value.materialKimap}</td>
                    <td>{value.materialName}</td>
                    <td>{value.materialUoM.value}</td>
                  </tr>
                )

              }

              )}
                
            </tbody>
          </table>
            
        </div>
    )
}
}

export default ListMaterial;
