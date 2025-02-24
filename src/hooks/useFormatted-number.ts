export const useFormattedNumber = () => {
  const formatNumber = (value: string) => {
    if (!value) return "";
    const number = value.replace(/,/g, ""); 
    return parseFloat(number).toLocaleString("en-US");
  };

  const unformatNumber = (value: string) => {
    return value.replace(/,/g, ""); 
  };

  return { formatNumber, unformatNumber };
};
