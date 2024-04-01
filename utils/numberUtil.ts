import { isNil } from 'lodash';
import numeral from 'numeral';

class NumberUtil {
  removeRedundantDecimal(num: number | null | undefined, keepDecimal?: number | null): number | null {
    if (typeof num === 'undefined' || num === null) {
      return null;
    }
    if (typeof num !== 'number') {
      num = parseFloat(num);
    }

    if (typeof keepDecimal === 'undefined' || keepDecimal === null) {
      return parseFloat(num.toFixed(6));
    } else {
      return parseFloat(num.toFixed(keepDecimal));
    }
  }

  toCurrency(num: number | string | null | undefined): string {
    if (isNil(num)) {
      return '';
    }

    return numeral(num).format('0,0.00');
  }

  toPercentage(num: number | string | null | undefined): string {
    if (isNil(num)) {
      return '';
    }

    return numeral(num).format('0%');
  }
}

export const numberUtil = new NumberUtil();
