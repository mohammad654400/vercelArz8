
interface FeeContentProps {
    tableHeaders: { label: string; key: string }[];
    tableData: { [key: string]: string }[];
    listData: { text: string }[];

  }

  interface TableRow {
    string: string;
    
  }
  
  export const TabContent: React.FC<FeeContentProps> = ({ tableHeaders, tableData, listData }) => {
    return (
      <div className="flex flex-col gap-10 lg:gap-[100px]">
        <div className="overflow-x-auto">
          <table className="flex flex-col w-full table-fixed min-w-[700px] ">
            <thead className="w-full">
              <tr className="flex w-full text-foreground">
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-[14px] border-b-2 border-primary w-1/6 min-w-[130px] sm:min-w-[180px] text-center text-[10px] sm:text-base font-semibold text-foreground">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
  
            <tbody className="w-full ">
              {tableData.map((row, index) => (
                <tr key={index} className="flex w-full">
                  {tableHeaders.map((header) => (
                    <td key={header.key} className="py-4 border-b border-[#ADADAD80] w-1/6 min-w-[130px] sm:min-w-[180px] h-16 sm:h-[109px] flex text-center justify-center items-center text-base font-semibold text-foreground">
                      {header.key === "0" ? (
                        <img src={row[header.key as keyof TableRow]} alt="User Level" className="flex  max-w-[41px] max-h-[41px] sm:max-w-[70px] sm:max-h-[70px]" />
                      ) : (
                        <span className="text-sixth font-normal text-xs md:text-base">
                        {row[header.key as keyof TableRow]}
                      </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <ul className="flex flex-col w-full gap-y-5 ">
          {listData.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5">
              <span className="mr-2 mt-[5px] sm:mt-[13px] w-3.5 h-3.5 bg-primary flex justify-start items-start rotate-45 rounded-[3.4px]" />
              </div>
              <span className="mr-3 text-xs sm:text-[19px] font-normal text-foreground leading-[26px] sm:leading-[44px]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  