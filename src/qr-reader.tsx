import React, { Component } from "react";
import QrReader from "react-qr-reader";
import styled from "styled-components";

class QR extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data: string | null) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err: any) => {
    console.error(err);
  };
  render() {
    return (
      <DivStyle>
        <QRCam
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </DivStyle>
    );
  }
}

const QRCam = styled(QrReader)`
  width: 60%;
`;

const DivStyle = styled.div`
  width: 60%;
  height: 50%;
`;

export default QR;
