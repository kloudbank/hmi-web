import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RenderType({chargeType}:{chargeType: string|undefined}) {
    if (chargeType === "ac3") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-charging-station"></i>
          </div>
          <div className="text">AC 3상</div>
        </>
      );
    }
    if (chargeType === "dcd") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="text">DC 차데모</div>
        </>
      );
    }
    if (chargeType === "dcc") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="text">DC 콤보</div>
        </>
      );
    }
    return (<>None</>)
  }
