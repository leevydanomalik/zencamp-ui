import React, { Component } from 'react'
import FormCustomer from './FormCustomer'
import M from 'moment'
import { Table } from 'react-bootstrap'


let payloadNew = {
    "customerid": "",
    "phonenumber": "",
    "fullname": "",
    "orderto": "",
    "orderfrom": "",
    "customercreationalDTO": {
        "createdBy": "SYSTEM",
        "createdDate": M().format('DD-MM-YYYY HH:mm:ss'),
        "modifiedBy": "",
        "modifiedDate": ""
    },
}
class OrderCustomer extends Component{
    constructor(props) {
        super(props)
        const judul = ''
        this.state = {
            judul,
            formCreateVisible: false,
            formEditVisible: false,
            selectedIndex: null,
            dataCstm: [],
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
        let response = await fetch('http://localhost:60040/get.customer.all', {
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
            let dataCstm = response.data
            let dataTable = dataCstm.map((value, index) => {
                const { customerid, phonenumber, fullname, orderfrom, orderto} = value
                return [index += 1, customerid, phonenumber, fullname, orderfrom, orderto]
            })
            this.setState({ dataCstm, dataTable })
            console.log(dataCstm)
        }
    }

    openFormCreate() {
        this.setState({ formEditVisible: false, formCreateVisible: true })
    }

    openFormEdit(index) {
        this.setState({ formCreateVisible: false, formEditVisible: true, selectedIndex: index })
    }

    viewCustomer(index) {
        this.setState({ formviewVisible: true, selectedIndex: index })
    }



    async saveDataCreate(data) {
        let payload = {
            ...data,
        }
        let response = await fetch('http://localhost:60040/post.customer', {
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
        }
        let response = await fetch('http://localhost:60040/update.customer', {
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

    async deleteCustomer(index) {
        let payload = {
            "referenceID": this.state.dataCstm[index].customerid,
            "requestBy": "SYSTEM",
            "requestDate": "01-01-2021 09:09:09",
        }
        let response = await fetch('http://localhost:60040/delete.customer', {
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
                <h1 style={{ textAlign: 'center', marginTop: 10 }}>{this.state.judul}</h1>
                <div id="data-tabel">
                    <div style={{ marginRight: 10, textAlign: 'right', marginTop: 70, width: '120%', color: 'green' }}>
                        <button className="button"
                            type="button"
                            onClick={() => this.openFormCreate()} >
                            <i class="fas fa-plus-circle"></i>
                        </button>
                    </div>
                    <Table striped bordered hover size="sm" style={{ padding: 15, width: '124%', marginTop: 20, textAlign: 'center' }}>
                        <thead>
                            <tablerow>
                                < tablecell align="left" colSpan={5}  >
                                    <h2>Order Produk</h2>
                                </tablecell>
                            </tablerow>
                            <tr>
                                <th>#</th>
                                <th>Customerid</th>
                                <th>Phonenumber</th>
                                <th>Customer Name</th>
                                <th>Order From</th>
                                <th>Order To</th>
                                <th>Action</th>
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
                                        <td >{value[5]}</td>

                                        <td >
                                            <button
                                                style={{ marginRight: 10 }}
                                                type="button"
                                                onClick={() => this.openFormEdit(index)} > EDIT
                                      </button>
                                            <button
                                                style={{ marginRight: 10 }}
                                                type="button"
                                                onClick={() => this.deleteCustomer(index)}>
                                                DELETE</button>


                                            <button
                                                style={{ marginRight: 10 }}
                                                type="button"
                                                onClick={() => this.viewCustomer(index)}>
                                                View</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </div>

                {this.state.formCreateVisible && <FormCustomer data={payloadNew} tipe="Create" close={() => this.setState({ formEditVisible: false, formCreateVisible: false })} save={(data) => this.saveDataCreate(data)} />}
                {this.state.formEditVisible && <FormCustomer data={this.state.dataCstm[this.state.selectedIndex]} tipe="Edit" close={() => this.setState({ formEditVisible: false, formCreateVisible: false })} save={(data) => this.saveEdit(data)} />}
                {this.state.formviewVisible && <FormCustomer data={this.state.dataCstm[this.state.selectedIndex]} tipe="View" close={() => this.setState({ formviewVisible: false })} />}

            </div>
        )
    }
}
export default OrderCustomer;