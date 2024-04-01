import { format, parseISO, parse } from 'date-fns';

class DateUtil {
  toShortDateString(value?: string | number | Date | null): string {
    const date = this.toDate(value);
    if (date) {
      return format(date, 'yyyy-MM-dd');
    }
    return '';
  }

  toLongDateString(value?: string | number | Date | null): string {
    const date = this.toDate(value);
    if (date) {
      return format(date, 'yyyy-MM-dd HH:mm:ss');
    }
    return '';
  }

  toLongDateString2(value?: string | number | Date | null): string {
    const date = this.toDate(value);
    if (date) {
      return format(date, 'yyyy-MM-dd HH:mm');
    }
    return '';
  }

  toDate(value?: string | number | Date | null): Date | null {
    if (!value) {
      return null;
    }
    if (typeof value === 'number') {
      return new Date(value);
    }
    if (typeof value === 'string') {
      const iosDate = parseISO(value);
      if (iosDate) {
        return iosDate;
      }
      return parse(value, 'yyyy-MM-dd HH:mm:ss', new Date());
    }

    return value;
  }
}

export const dateUtil = new DateUtil();
