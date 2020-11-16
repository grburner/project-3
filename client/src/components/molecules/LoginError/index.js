import React from 'react';

import Alert from 'react-bootstrap/Alert';

const LoginError = ({show}) => {
    if (show) {
        return (
            <Alert variant="danger">
            <Alert.Heading>Oh dang! Login error!</Alert.Heading>
            <p>
              Please check your user name and password and try again!
            </p>
          </Alert>
        )
    } else {
        return ''
    }
}

export default LoginError;