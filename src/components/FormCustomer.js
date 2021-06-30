import React, { Component } from 'react'


class FormCustomer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                ...props.data,
                customerid: props.data.customerid
            },
            judul: this.props.tipe,
            dataTable: []
        }
    }



    render() {
        return (
            <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
                <div id="form" className="modal-content">
                    <h1>Form {this.props.tipe}</h1>
                    <form action="#">
                        <div style={{ marginBottom: 20 }}>
                            <h4>Customer ID</h4>
                            <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder=""
                                readOnly={this.props.tipe === "View"}
                                value={this.state.data.customerid}
                                onChange={(e) => this.setState({ data: { ...this.state.data, customerid: e.target.value } })}
                            />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <h4>Phonenumber</h4>
                            <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder=""
                                readOnly={this.props.tipe === "View"}
                                value={this.state.data.phonenumber}
                                onChange={(e) => this.setState({ data: { ...this.state.data, phonenumber: e.target.value } })}
                            />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <h4>Customer Name</h4>
                            <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder=""
                                readOnly={this.props.tipe === "View"}
                                value={this.state.data.fullname}
                                onChange={(e) => this.setState({ data: { ...this.state.data, fullname: e.target.value } })}
                            />
                        </div>
                        <div style={{ marginBottom: 20 }} >
                            <h4>Order From</h4>
                            <div className='input-with-icon'>
                                <input
                                    style={{ width: '95%' }}
                                    type="text"
                                    placeholder=""
                                    readOnly={this.props.tipe === "View"}
                                    value={this.state.data.orderfrom}
                                    onChange={(e) => this.setState({ data: { ...this.state.data, orderfrom: e.target.value } })}
                                />
                            </div>

                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <h4>Destination</h4>
                            <input
                                style={{ width: '100%' }}
                                type="text"
                                placeholder=""
                                readOnly={this.props.tipe === "View"}
                                value={this.state.data.orderto}
                                onChange={(e) => this.setState({ data: { ...this.state.data, orderto: e.target.value } })}
                            />
                        </div>
                    </form>
                    <div id="button" style={{ textAlign: 'right' }}>
                        {this.props.tipe !== "View" ?
                            <button
                                style={{ marginRight: 10 }}
                                type="button"
                                onClick={() => this.props.save(this.state.data)} > Save </button>
                            : null}
                        <button
                            style={{ marginRight: 10 }}
                            type="button"
                            onClick={() => this.props.close()}>
                            Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCustomer;
