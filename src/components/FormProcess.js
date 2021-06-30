import React, { Component } from 'react'
import M from 'moment';


class FormProcess extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: {
            ...props.data,
            msoDocDate: props.data.msoDocDate ? M(props.data.msoDocDate, 'DD-MM-YYYY').format('YYYY-MM-DD') : ''
          },
          judul: this.props.tipe,
          dataTable: []
        }
      }


      render() {
        return (
          <div className="process" style={{ width: '100%', textAlign: 'left' }}>
            <div id="form" className="modal-process">
              <h1>Form {this.props.tipe}</h1>
              <form action="#">
                <div style={{ marginBottom: 20 }}>
                  <h4>KIMAP</h4>
                  <input
                    style={{ width: '70%' }}
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
                    style={{ width: '70%' }}
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
                    style={{ width: '70%' }}
                    type="text"
                    placeholder=""
                    readOnly={this.props.tipe === "View"}
                    value={this.state.data.msoName}
                    onChange={(e) => this.setState({ data: { ...this.state.data, msoName: e.target.value } })}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <h4>Ref CS Number</h4>
                  <input
                    style={{ width: '70%' }}
                    type="text"
                    placeholder=""
                    readOnly={this.props.tipe === "View"}
                    value={this.state.data.msoPeriod}
                    onChange={(e) => this.setState({ data: { ...this.state.data, msoPeriod: e.target.value } })}
                  />
                </div>
                
              </form>
              <div id="button" style={{ textAlign: 'right' }}>
                {/* {this.props.tipe !== "View" ? 
                <button
                  style={{ marginRight: 10 }}
                  type="button"
                  onClick={() => this.props.save(this.state.data)} > Save </button>
                  : null}  */}
                <button
                  style={{ marginRight: 10 }}
                  type="button"
                  onClick={() => this.props.close()}>
                  Process</button>
              </div>
            </div>
          </div>
        )
      }
}

export default FormProcess;
