
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
      <div className="mt-12">
        <div className="overflow-x-auto mb-20">
          <table className="flex flex-col w-full table-fixed min-w-[700px]">
            <thead className="w-full">
              <tr className="flex w-full text-foreground">
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-3 border-b border-primary w-1/6 text-center text-base font-semibold text-foreground">
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
  
            <tbody className="w-full ">
              {tableData.map((row, index) => (
                <tr key={index} className="flex w-full">
                  {tableHeaders.map((header) => (
                    <td key={header.key} className="py-4 border-b border-[#ADADAD80] w-1/6 h-28 flex text-center justify-center items-center text-base font-semibold text-foreground">
                      {header.key === "0" ? (
                        <img src={row[header.key as keyof TableRow]} alt="User Level" className="flex max-w-16 max-h-16" />
                      ) : (
                        <span className="text-sixth font-normal text-base">
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
  
        <ul className="w-full space-y-5 mb-28">
          {listData.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5">
              <span className="mr-2 mt-3 w-3.5 h-3.5 bg-primary flex justify-start items-start rotate-45" />
              </div>
              <span className="mr-3 text-lg font-normal text-foreground leading-10">{item.text}</span>
            </li>
          ))}
        </ul>
  
      
      </div>
    );
  };
  