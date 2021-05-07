import React, { Component } from 'react'
import Detail1 from './Detail1'

class Inbox extends Component {
  constructor(props) {

    super(props)
    this.state = {
      Visiblepopup: false
    }
  }
  openPopup= () => {
    this.setState({Visiblepopup:!this.state.Visiblepopup})
  }


  render() {
    return (
      <div>
        <table style={{ padding: 15, width: '100%', marginTop: 70, textAlign: 'left' }}>
          <thead>
            <tablerow>
              < tablecell align="left" colSpan={5}  >
                <h2>Notification</h2>
              </tablecell>
            </tablerow>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Doc.Date</th>
              <th scope="col">Reff CS Number</th>
              <th colspan="2">Description</th>
              <th colspan="2">Detail</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>23145</td>
              <td>13-04-2021</td>
              <td>5642874</td>
              <td colspan="2">Order Barang from Jakarta to Papua Kimap W105 has been approved</td>
              <td>
                <i class="fas fa-pen"
                  type="icon"
                  onClick={() => this.openPopup()} >
                </i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>33421</td>
              <td>09-04-2021</td>
              <td>4532216</td>
              <td colspan="2">Order Barang from Medan to Kalimantan Kimap 32L1 has been approved</td>
              <td>
                <i class="fas fa-pen"
                  type="icon"
                  onClick={() => this.openPopup()} >
                </i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>34422</td>
              <td>14-05-2021</td>
              <td>3311987</td>
              <td colspan="2">Order Barang from PekanBaru to Surabaya Kimap L1H5 has been approved</td>
              <td>
                <i class="fas fa-pen"
                  type="icon"
                  onClick={() => this.openPopup()} >
                </i>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.Visiblepopup && (
          <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
            <div id="form" className="modal-content-only">
              <Detail1 />
              <div style={{ textAlign: 'right' }}>
              <button style={{width:"10%", textAlign:"center"}}
                type="button"
                onClick={() => this.openPopup()} >
                Close
              </button>
              </div>
            </div>
          </div>
        )}
        {/* {this.state.Visiblepopup && ( 
          <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
          <div id="form" className="modal-content">
          <FormCreateFleet />
          <button
                  type="button"
                  onClick={() => this.openPopup()} >
                  Close  
          </button>
          </div>
          </div>


         )} */}
        
      </div>

    )
  }
}




export default Inbox;
