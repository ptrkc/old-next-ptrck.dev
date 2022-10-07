const formatDate = (date: string) => {
  const newDate = new Date(date);
  const offset = newDate.getTimezoneOffset();
  const formattedDate = new Date(newDate.getTime() - (offset * 60 * 1000));
  return formattedDate.toISOString().split('T')[0];
};

export default formatDate;
