// Utilitário > Format number
export const formatNumber = (value, decimalPrecision, thousandPrecision, mSeparator, dSeparator) => {
    var re = '\\d(?=(\\d{' + (thousandPrecision || 3) + '})+' + (decimalPrecision > 0 ? '\\D' : '$') + ')',
    num = value.toFixed(Math.max(0, ~~decimalPrecision));
    return (dSeparator ? num.replace('.', dSeparator) : num).replace(new RegExp(re, 'g'), '$&' + (mSeparator || ','));
}
