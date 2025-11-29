import Image from "next/image";
import { paymentPartners } from "./paymentPartners";

const Partners = () => {
  const gridPositions = [
    "col-start-1 col-end-2 row-start-1 row-end-2",
    "col-start-2 col-end-3 row-start-1 row-end-2",
    "col-start-3 col-end-4 row-start-1 row-end-2",
    "col-start-4 col-end-5 row-start-1 row-end-2",
    "col-start-2 col-end-4 row-start-2 row-end-3",
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-0 mt-5">
      {paymentPartners.map((item, index) => (
        <div
          key={item.id}
          className={`${gridPositions[index]} flex items-center justify-center`}
        >
          <Image
            src={item.src}
            alt={item.name}
            width={10}
            height={10}
            className={`object-contain ${item.className}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;