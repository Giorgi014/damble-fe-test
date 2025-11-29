import Image from "next/image";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

type ReferralRow = {
  code: string;
  claimed: string;
  refs: number;
  percent: string;
  wagered: string;
};

const ReferralTableRow = ({ row }: { row: ReferralRow }) => {
  return (
    <TableRow>
      <TableCell className="px-6 py-4 align-middle text-[13px] font-medium leading-[100%] manrope_semi_bold">
        {row.code}
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-[#FFFFFF] text-[13px] font-medium leading-[100%] manrope_semi_bold">
        {row.claimed}
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-[#FFFFFF] text-[13px] font-medium leading-[100%] manrope_semi_bold">
        {row.refs}
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-[#FFFFFF] text-[13px] font-medium leading-[100%] manrope_semi_bold">
        {row.percent}
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-[#FFFFFF] text-[13px] font-medium leading-[100%] manrope_semi_bold">
        {row.wagered}
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-center">
        <Button className="w-20 h-[30px] bg-[#88E515] text-[#1C202B] rounded-[1px] font-semibold text-[10px] leading-[100%] tracking-[0.11em] hover:bg-[#9fff29] cursor-pointer">
          CLAIM
        </Button>
      </TableCell>
      <TableCell className="px-4 py-4 align-middle text-center">
        <Button
          variant="outline"
          className="w-20 h-[30px] border-none bg-[#1c202b] rounded-[1px] text-[10px] tracking-[0.11em] text-[#F2F2F2] leading-[100%] hover:bg-[#232838] cursor-pointer"
        >
          <Image
            width={10}
            height={10}
            src={"/img/copy.svg"}
            alt="copy"
            className="w-[10.26px] h-[11.54px]"
          />
          COPY
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReferralTableRow;
