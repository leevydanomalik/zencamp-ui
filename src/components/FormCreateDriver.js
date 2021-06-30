import React, { Component } from 'react'
// import { Table } from 'react-bootstrap'



class FormCreateDriver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectItem: null,

    }
  }

  selectItem = (data) => {
    this.setState({selectItem:data})
    this.props.onChange(data) 
}
    render(){
    return (
        <div >
          <table cellSpacing='0' style={{ padding: 15, width: '100%', marginTop: 10, textAlign:'center'}}>
          {/* striped bordered hover size="sm" style={{ padding: 15, width: '300%', marginTop: 70, textAlign:'center'}} */}
            <thead>
              <tablerow>
                < tablecell align="left" colSpan={5}  >
                  <h2>Tabel Driver</h2>
                </tablecell>
              {/* <tablecell align="right">Price</tablecell> */}
              </tablerow>
              <tr>
                <th>#</th>
                <th>Driver Name</th>
                <th>SIM</th>
                <th>Alamat</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Riki</td>
                <td>12-08-2021</td>
                <td>Surabaya</td>
                <td>0832453278</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('Riki')}>
                </i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Haris</td>
                <td>23-07-2021</td>
                <td>Curug</td>
                <td>0834216758</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('Haris')}>
                </i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dunand</td>
                <td>27-10-2021</td>
                <td>Batam</td>
                <td>0890335677</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('Dunand')}>
                </i>
                </td>
              </tr>
              
            </tbody>
          </table>
            
        </div>
    )
}
}
export default FormCreateDriver;
