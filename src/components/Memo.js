import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import { PDFReader } from 'reactjs-pdf-reader'


class ViewPDF extends Component {
    render () {
        const {url, type} = this.props
        console.log('url', url)
        console.log('type', type)
        return (
            <div className="padding-30px">
                <h1>PDF READER</h1>
                <div style={{ overflow: 'scroll', height: 600 }}>
                    {url && <PDFReader url={url} showAllPage={true} />}
                </div>

                <div style={{paddingBottom: 10}}></div>

                {/* <h1>FILE VIEWER</h1>
                <div style={{ overflow: 'scroll', height: 600, width:'100%' }}>
                    {url && <FileViewer fileType={type} filePath={url} />}
                </div> */}
            </div>
        )
    }
}

class Memo extends Component {
    constructor () {
        super()
        this.state = {
            fileType: 'pdf',
            docUrl: '',
            formDocVisible: false
        }
    }

    componentDidMount () {
        this.getDocument('file')
    }

    async getDocument(type) {
        let response = await fetch('http://localhost:60040/applicant/memo.anggaran?reportFormat=PDF', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.5BG9SEVOGo_xRhtT8IkyoSy60kPg8HM9Vpvb0TdNew4'
            }
        })
        const time = new Date().getTime()
        response = await response.blob()
        if (response.size > 0) {
            response = URL.createObjectURL(response)
            console.log('response', response)
            if (type === "download") {
                const tempLink = document.createElement('a');
                tempLink.href = response;
                tempLink.setAttribute('download', 'DOWNLOAD' + time + '.pdf');
                tempLink.click()
            } else {
                this.setState({
                    docUrl: response,
                    fileType: "pdf",
                    formDocVisible: true
                });
            }
        } else alert("Failed: Document Not Found")
    }

    render() {
        const {docUrl, fileType} = this.state
        return (
            <HashRouter history={Router.browserHistory}>
                <div  style={{backgroundColor: '#fff', width:'100%', paddingTop:80}}>
                    <button onClick={() => this.getDocument('download')}>
                        DOWNLOAD DOCUMENT 
                    </button>
                    <ViewPDF url={docUrl} type={fileType} />
                </div>
            </HashRouter>
        )
    }
}

export default Memo;