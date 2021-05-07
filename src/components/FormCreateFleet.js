import React, { Component } from 'react';
// import { Table } from 'react-bootstrap'



class FormCreateFleet extends Component {
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
          <table cellSpacing='0' style={{ padding: 15, width: '100%', marginTop: 70, textAlign:'center'}}>
          {/* striped bordered hover size="sm" style={{ padding: 15, width: '300%', marginTop: 70, textAlign:'center'}} */}
            <thead>
              <tablerow>
                < tablecell align="left" colSpan={5}  >
                  <h2>Tabel Fleet</h2>
                </tablecell>
              {/* <tablecell align="right">Price</tablecell> */}
              </tablerow>
              <tr>
                <th>Id</th>
                <th>Fleet Name</th>
                <th>Fleet Type</th>
                <th>KIR</th>
                <th>Plat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>309990998</td>
                <td>KRI Sultan Hasanuddin</td>
                <td>Kargo</td>
                <td>Surabaya</td>
                <td>Bandung</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('KRI Sultan Hasanuddin')}>
                </i>
                </td>
              </tr>
              <tr>
                <td>309965778</td>
                <td>KRI Fatahillah</td>
                <td>Kargo</td>
                <td>Bali</td>
                <td>Kep.Seribu</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('KRI Fatahillah')}>
                </i>
                </td>
              </tr>
              <tr>
                <td>343536367</td>
                <td>KRI Usman Harun</td>
                <td>Kargo</td>
                <td>Sulawesi</td>
                <td>Manado</td>
                <td>
                <i class="fas fa-plus"
                  type="icon"
                  onClick={() => this.selectItem('KRI Usman Harun')}>
                </i>
                </td>
              </tr>
              
              
            </tbody>
          </table>
            
        </div>
    )
}
}

export default FormCreateFleet;
