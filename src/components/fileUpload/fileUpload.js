import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Spinner from '../spinner/spinner';
import ControlledExpansionPanels from '../ControlledExpansionPanels/ControlledExpansionPanels';
import Paper from 'material-ui/Paper';
import './fileUpload.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
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

 renderUploadButton(filesPreview, classes) {
   return(
     <div>
      <div className="selected-file-name">
        Selected File : {filesPreview}
      </div>
      <div className='display-upload-container'>
        <Button raised color="primary" className={classes.button}  primary={true} onClick={(event) => this.handleClick(event)}>Upload File</Button>
      </div>
    </div>
   );
 }

 render() {
  const { classes } = this.props;
    return (
      <div className="file-upload-component">
        <center>
          <Dropzone className = 'drag-drop-area' onDrop={(files) => this.onDrop(files)}>
                <p class='place-holder'>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>

        </center>
        <MuiThemeProvider>
        { this.state.filesPreview.length > 0 && this.renderUploadButton(this.state.filesPreview, classes) }
        </MuiThemeProvider>
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
