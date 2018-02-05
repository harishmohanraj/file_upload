import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Spinner from '../spinner/spinner';
import ControlledExpansionPanels from '../ControlledExpansionPanels/ControlledExpansionPanels';
import Paper from 'material-ui/Paper';
import FileUpload from 'material-ui-icons/FileUpload';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import uploadLogo from '../../assets/img/cloud-upload.png';
import Delete from 'material-ui-icons/Delete';

import './fileUpload.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class fileUpload extends Component {
  constructor(props){
    super(props);
    this.state={
      filesPreview:[],
      filesToBeSent:[],
      printcount:1,
      showSpinner: false,
      isLoaded: false,
    }
  }

  onDrop(acceptedFiles) {
    this.setState({
      isLoaded: false
    });

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
        showSpinner: false,
        isLoaded: true
       })
     }, 2000)
   }
 }

 cancelClickHandle() {
  this.setState({
    filesPreview: []
  });
 }

 renderUploadButton(filesPreview, classes) {
   return(
     <div className="drag-drop-area upload">
      <div className="selected-file-name">
        Selected File : <strong>{filesPreview}</strong>
      </div>
      <div className='display-upload-container'>
      <Button className={classes.button} raised color="default" onClick={(event) => this.handleClick(event)}>
        Upload
        <FileUpload className={classes.rightIcon} />
      </Button>
      <Button className={classes.button} raised variant="raised" color="secondary" onClick={(event) => this.cancelClickHandle()}>
        Reset
        <Delete className={classes.rightIcon} />
      </Button>
      </div>
    </div>
   );
 }

 render() {
  const { classes } = this.props;
    return (
      <div className="file-upload-component">
        <center>
          {(this.state.filesPreview.length === 0 || this.state.isLoaded )&& <Dropzone className = 'drag-drop-area' onDrop={(files) => this.onDrop(files)}>
                <p class='place-holder'><strong>Drag a file, or browse to upload</strong></p>
                <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                <img src={uploadLogo} alt="uploadLogo" />
                </IconButton>
          </Dropzone>}
          <MuiThemeProvider>
            { this.state.filesPreview.length > 0 && !this.state.isLoaded && this.renderUploadButton(this.state.filesPreview, classes) }
          </MuiThemeProvider>
        </center>
        {this.state.showSpinner && <Spinner />}
        {!this.state.showSpinner && this.state.isLoaded && <div className='paper'>
          <Paper elevation={10}>
          <h2>
            Predictions
          </h2>
            <ControlledExpansionPanels/>
          </Paper>
        </div>
      }
      </div>
    );
  }
}

export default withStyles(styles)(fileUpload); // Don’t forget to use export default!
