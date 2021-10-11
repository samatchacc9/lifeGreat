const formatShortMonthShortYear = (value) => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: '4-digit' }).format(value);
};

export { formatShortMonthShortYear };
