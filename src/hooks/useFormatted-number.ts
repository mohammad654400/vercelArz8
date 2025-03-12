export const useFormattedNumber = () => {
  const formatNumber = (value: string) => {
    if (!value) return "";
    if (value.startsWith("0.00")) {
      return value; 
    }
    const number = value.replace(/,/g, ""); 
    return parseFloat(number).toLocaleString("en-US");
  };

  const unformatNumber = (value: string) => {
    return value.replace(/,/g, ""); 
  };

  return { formatNumber, unformatNumber };
};
