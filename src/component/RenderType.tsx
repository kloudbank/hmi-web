import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getCpTpNm, getChargeTpNm } from '../app/utils/translate'

export default function RenderType({chargeInfo}:{chargeInfo: any|undefined}) {
    if (chargeInfo === "ac3") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-charging-station"></i>
          </div>
          <div className="text">AC 3상</div>
        </>
      );
    }
    if (chargeInfo === "dcd") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="text">DC 차데모</div>
        </>
      );
    }
    if (chargeInfo === "dcc") {
      return (
        <>
          <div className="icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="text">DC 콤보</div>
        </>
      );
    }
    else {
      const cp_tp_nm = getCpTpNm(Number(JSON.parse(chargeInfo).cp_tp));
      const charge_tp_nm = getChargeTpNm(Number(JSON.parse(chargeInfo).charge_tp));
      return (
        <>
          <div className="icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="text">{cp_tp_nm + ' / ' + charge_tp_nm}</div>
        </>
      );
    }
    return (<>None</>)
  }
