import React from 'react'




function GenerateReport() {
    return (
        <div>
          <table  striped bordered hover size="sm" style={{ padding: 15, width: '147%', marginTop: 70, textAlign:'center'}}>
            <thead>
            <tablerow>
                < tablecell align="left" colSpan={5}  >
                    <h2>Generate Report</h2>
                </tablecell>
            </tablerow>
              <tr>
                <th>#</th>
                <th>Barang</th>
                <th>Ref CS Number</th>
                <th>Username</th>
                <th>Generate Report</th>

                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rolex 23L1</td>
                <td>1230001</td>
                <td>Jere</td>
                <td>
                <button
                          type="button"
                          onClick='' >
                          Generate </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Celana Jeans</td>
                <td>1456702</td>
                <td>Duma</td>
                <td>
                <button
                          type="button"
                          onClick='' >
                          Generate </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hoodie 3L1</td>
                <td>1224567</td>
                <td>Hardiman</td>
                <td>
                <button
                          type="button"
                          onClick='' >
                          Generate </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Adidas 501</td>
                <td>1224569</td>
                <td>Dhandy</td>
                <td>
                <button
                          type="button"
                          onClick='' >
                          Generate </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Hoodie A45</td>
                <td>1224332</td>
                <td>Mikael</td>
                <td>
                <button
                          type="button"
                          onClick='' >
                          Generate </button>
                </td>
              </tr>
            </tbody>
          </table>
            
        </div>
    )
}

export default GenerateReport;
