import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';
import Spinner from '../spinner/spinner';
import ControlledExpansionPanels from '../accordion/accordion';

import './fileUpload.css'

class fileUpload extends Component {
  constructor(props){
    super(props);
    this.state={
      filesPreview:[],
      filesToBeSent:[],
      printcount:1,
      showSpinner: false,
    }
  }

  onDrop(acceptedFiles) {
    var filesToBeSent=this.state.filesToBeSent;
    if(filesToBeSent.length < this.state.printcount){
      filesToBeSent.push(acceptedFiles);
    }
    else{
      filesToBeSent.pop();
      filesToBeSent[0] = acceptedFiles;
    }
    var filesPreview=[];
      for(var i in filesToBeSent){
        filesPreview.push(<div>
          {filesToBeSent[i][0].name}
          </div>
        )
      }

    this.setState({filesToBeSent,filesPreview});
 }

 handleClick(event){
   if(this.state.filesPreview.length) {
    this.setState({
      showSpinner: true
     })
     setTimeout(() => {
      this.setState({
        showSpinner: false
       })
     }, 2000)
   }
 }

 render() {
    return (
      <div className="file-upload-component">
        <center>
          <Dropzone className = 'drag-drop-area' onDrop={(files) => this.onDrop(files)}>
                <p class='place-holder'>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
          <div className="selected-file-name">
            File to be uploaded : {this.state.filesPreview}
          </div>
        </center>
        <MuiThemeProvider>
          <div className='display-upload-container'>
            <Button raised color="primary" label="Upload File" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
        {this.state.showSpinner && <Spinner />}
        <Spinner />
        <ControlledExpansionPanels/>
      </div>
    );
  }
}

export default fileUpload; // Don’t forget to use export default!
