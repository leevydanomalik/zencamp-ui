import React, { Component } from 'react'
// import { Table } from 'react-bootstrap'



const payload = [
  {
    reff_cs_number: "3456787",
    customer: "Rizki",
    from: "Surabaya",
    destination: "Bandung",
    doc_date: "12-08-2021",
  },
  {
    reff_cs_number: "7658435",
    customer: "Aini",
    from: "Curug",
    destination: "Malang",
    doc_date: "23-07-2021",

  },
  {
    reff_cs_number: "9867342",
    customer: "Nadflatul",
    from: "Jakarta",
    destination: "Sulawesi",
    doc_date: "30-05-2021",
  }
]



class FormCreateReff extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectItem: null,
      data: payload

    }
  }
  selectItem = (data) => {
    this.setState({ selectItem: data })
    this.props.onChange(data)
  }
  render() {
    return (
      <div >
        <table cellSpacing='0' style={{ padding: 15, width: '100%', marginTop: 10, textAlign: 'center' }}>
          <thead>
            <tablerow>
              < tablecell align="left" colSpan={5}  >
                <h2>Customer</h2>
              </tablecell>
            </tablerow>
            <tr>
              <th>Ref CS Number</th>
              <th>Customer</th>
              <th>Doc.Date</th>
              <th>From </th>
              <th>Destination</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => {
              return (
                <tr>
                  <td>{value.reff_cs_number}</td>
                  <td>{value.customer}</td>
                  <td>{value.doc_date}</td>
                  <td>{value.from}</td>
                  <td>{value.destination}</td>
                  <td>
                    <i class="fas fa-plus"
                      type="icon"
                      onClick={() => this.selectItem(value)}>
                    </i>
                  </td>
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

export default FormCreateReff;
