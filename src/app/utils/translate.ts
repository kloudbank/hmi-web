export const translateEdge = (charge: any) => {
  charge.cp_tp_nm = getCpTpNm(charge.cp_tp);
  charge.charge_tp_nm = getChargeTpNm(charge.charge_tp);
  return charge;
}

export const getCpTpNm = (cp_tp: number) => {
  switch (cp_tp) {
    case 1:
      return 'B타입(5핀)';
    case 2:
      return 'C타입(5핀)';
    case 3:
      return 'BC타입(5핀)';
    case 4:
      return 'BC타입(7핀)';
    case 5:
      return 'DC차 데모';
    case 6:
      return 'AC 3상';
    case 7:
      return 'DC콤보';
    case 8:
      return 'DC차데모+DC콤보';
    case 9:
      return 'DC차데모+AC3상';
    case 10:
      return 'DC차데모+DC콤보, AC3상';
    default:
      return '';
  }
}

export const getChargeTpNm = (charge_tp: number) => {
  switch (charge_tp) {
    case 1:
      return '완속'
    case 2:
      return '급속'
    default:
      return '';
  };
}