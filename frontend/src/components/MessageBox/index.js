import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default function MessageBox(props) {
  return (
    <div >
      {/* <div className={`alert alert-${props.variant || 'info'}`}> */}
      <Alert severity="error">{props.children}</Alert>
    </div>
  )
}
