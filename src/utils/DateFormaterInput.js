function DateFormaterInput(inputDate) {
  const originalDate = new Date(inputDate);

  const modifiedDate = new Date(originalDate);
  modifiedDate.setDate(modifiedDate.getDate());

  const formattedDate = modifiedDate.toISOString().split('T')[0];

  return formattedDate;
}

export default DateFormaterInput
