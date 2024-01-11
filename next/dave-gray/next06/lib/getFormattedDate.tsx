const getFormattedDate = (dateString: string): string => {
  return new Intl.DateTimeFormat("en-in", { dateStyle: "long" }).format(
    new Date(dateString)
  );
};
export default getFormattedDate;
