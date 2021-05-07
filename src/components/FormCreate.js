import React, { Component } from 'react'
import M from 'moment';

import FormCreateDriver from './FormCreateDriver';
import FormCreateReff from './FormCreateReff';
import FormCreateFleet from './FormCreateFleet';

class FormCreate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Visiblepopup: false,
      Visiblepopupsatu: false,
      Visiblepopupdua: false,
      data: {
        ...props.data,
        msoID:props.data.msoID ? props.data.msoID : new Date().getTime(),
        msoDocDate: props.data.msoDocDate ? M(props.data.msoDocDate, 'DD-MM-YYYY').format('YYYY-MM-DD') : ''
      },
      judul: this.props.tipe,
      dataTable: []
    }
  }

  openPopup = () => {
    this.setState({ Visiblepopup: !this.state.Visiblepopup })
  }
  openPopupsatu = () => {
    this.setState({ Visiblepopupsatu: !this.state.Visiblepopupsatu })
  }
  openPopupdua = () => {
    this.setState({ Visiblepopupdua: !this.state.Visiblepopupdua })
  }





  render() {
    return (
      <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
        <div id="form" className="modal-content">
          <h1>Form {this.props.tipe}</h1>
          <form action="#">
            <div style={{ marginBottom: 20 }}>
              <h4>ID</h4>
              <input
                style={{ width: '100%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoID}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoID: e.target.value } })}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Doc.Date</h4>
              <input
                style={{ width: '100%' }}
                type="date"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoDocDate}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoDocDate: e.target.value } })}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Customer</h4>
              <input
                style={{ width: '100%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoName}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoName: e.target.value } })}
              />
            </div>
            <div style={{ marginBottom: 20 }} >
              <h4>Ref CS Number</h4>
              <div className='input-with-icon'>
                <input
                  style={{ width: '95%' }}
                  type="text"
                  placeholder=""
                  readOnly={this.props.tipe === "View"}
                  value={this.state.data.msoPeriod}
                  onChange={(e) => this.setState({ data: { ...this.state.data, msoPeriod: e.target.value } })}
                />
                <i class="fas fa-search"
                  type="icon"
                  onClick={() => this.openPopup()} >
                </i>


              </div>

            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Vendor</h4>
              <input
                style={{ width: '100%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoVendor}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoVendor: e.target.value } })}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Driver</h4>
              <div className='input-with-icon'>
                <input
                  style={{ width: '95%' }}
                  type="text"
                  placeholder=""
                  readOnly={this.props.tipe === "View"}
                  value={this.state.data.msoDriver}
                  onChange={(e) => this.setState({ data: { ...this.state.data, msoDriver: e.target.value } })}
                />
                <i class="fas fa-search"
                  type="icon"
                  onClick={() => this.openPopupsatu()} >
                </i>


              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Fleet</h4>
              <div className='input-with-icon'></div>
              <input
                style={{ width: '95%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoFleet}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoFleet: e.target.value } })}
              />
              <i class="fas fa-search"
                type="icon"
                onClick={() => this.openPopupdua()} >
              </i>


            </div>

            <div style={{ marginBottom: 20 }}>
              <h4>From</h4>
              <input
                style={{ width: '100%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoFrom}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoFrom: e.target.value } })}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <h4>Destination</h4>
              <input
                style={{ width: '100%' }}
                type="text"
                placeholder=""
                readOnly={this.props.tipe === "View"}
                value={this.state.data.msoDestination}
                onChange={(e) => this.setState({ data: { ...this.state.data, msoDestination: e.target.value } })}
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
        {this.state.Visiblepopup && (
          <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
            <div id="form" className="modal-content-only">
              <div>
                <FormCreateReff onChange={(data) => this.setState({Visiblepopup:false, data: { ...this.state.data, msoPeriod: data.reff_cs_number, msoName: data.customer, msoFrom: data.from, msoDestination:data.destination }})} style={{ margin: 'auto' }} />
                <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={() => this.openPopup()} >
                    Close
              </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.Visiblepopupsatu && (
          <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
            <div id="form" className="modal-content-only">
              <div>
                <FormCreateDriver onChange={(data) => this.setState({Visiblepopupsatu:false, data: { ...this.state.data, msoDriver: data } }) } style={{ margin: 'auto' }} />
                <div style={{ textAlign: 'right' }} >
                  <button
                    type="button"
                    onClick={() => this.openPopupsatu()} >
                    Close
                  </button>
                  </div>
                </div>
              </div>
            </div>
        )}
            {this.state.Visiblepopupdua && (
              <div className="modal" style={{ width: '100%', textAlign: 'left' }}>
                <div id="form" className="modal-content-only">
                  
                  <div>
                  <FormCreateFleet onChange={(data) => this.setState({Visiblepopupdua:false, data: { ...this.state.data, msoFleet: data } }) } style={{ margin: 'auto' }} />
                    <div style={{ textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={() => this.openPopupdua()} >
                    Close
              </button>
                </div>
                </div>
                </div>
              </div>
            )}
          </div>
        )
        }
}

export default FormCreate;
