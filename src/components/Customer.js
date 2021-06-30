import React, { Component } from 'react'

class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCustomer: []
        }
    }

    componentDidMount() {
        this.getcustomer()
    }

    async getcustomer(){
        let payload = { "limit": 5, "offset": 0, "params": {} }
        let response = await fetch ('http://localhost:60040/get.customer.all', {
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
          let dataCstmer = response.data
          this.setState({dataCustomer:dataCstmer})
        console.log(dataCstmer)
        }
    
    
      }

    render() {
        return (
            <div >
                <table cellSpacing='0' style={{ padding: 15, width: '133%', marginTop: 70, textAlign: 'center' }}>
                    <thead>
                        <tablerow>
                            < tablecell align="left" colSpan={5}  >
                                <h2>Data Customer</h2>
                            </tablecell>
                        </tablerow>
                        <tr>
                            <th>Customer ID</th>
                            <th>Phone Number</th>
                            <th>Customer Name</th>
                            <th>Order From</th>
                            <th>Order To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dataCustomer.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.customerid}</td>
                                    <td>{value.phonenumber}</td>
                                    <td>{value.fullname}</td>
                                    <td>{value.orderfrom}</td>
                                    <td>{value.orderto}</td>
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

export default Customer;