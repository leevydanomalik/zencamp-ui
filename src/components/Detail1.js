import React from 'react'
// import { Table } from 'react-bootstrap'



function Detail1() {
    return (
        <div >
          <table cellSpacing='0' style={{ padding: 15, width: '100%', marginTop: 10, textAlign:'center'}}>
          {/* striped bordered hover size="sm" style={{ padding: 15, width: '300%', marginTop: 70, textAlign:'center'}} */}
            <thead>
              <tablerow>
                < tablecell align="left" colSpan={5}  >
                  <h2>Detail Order</h2>
                </tablecell>
              {/* <tablecell align="right">Price</tablecell> */}
              </tablerow>
              <tr>
                <th>Id</th>
                <th>Doc.Date</th>
                <th>Reff CS Number</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23145</td>
                <td>13-04-2021	</td>
                <td>5642874</td>
                <td>Order Barang from Jakarta to Papua Kimap W105 has been approved</td>
                <td>
                <i class="fas fa-download"
                type="icon"
                onClick=""
                
                ></i>
                </td>
              </tr>
              
            </tbody>
          </table>
            
        </div>
    )
}

export default Detail1;
