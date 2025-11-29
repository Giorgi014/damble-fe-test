import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ReferralTableRow from "./referralTableRow";

type ReferralRow = {
  code: string;
  claimed: string;
  refs: number;
  percent: string;
  wagered: string;
};

const ReferralTable = ({ data }: { data: ReferralRow[] }) => {
  return (
    <section aria-labelledby="referral-table-heading">
      <div className="w-full bg-transparent overflow-x-auto">
        <Table className="w-full text-sm text-[#f2f2f2dd]">
          <TableHeader className="w-full bg-[#262D3C] text-[12px] tracking-[0.11em] font-extrabold leading-[100%] text-[#FFFFFF] uppercase">
            <TableRow>
              <TableHead className="text-left px-6 py-4">CODE</TableHead>
              <TableHead className="text-left px-4 py-4">CLAIMED</TableHead>
              <TableHead className="text-left px-4 py-4">REFS</TableHead>
              <TableHead className="text-left px-4 py-4">%</TableHead>
              <TableHead className="text-left px-4 py-4">WAGERED</TableHead>
              <TableHead className="text-center px-4 py-4">CLAIM</TableHead>
              <TableHead className="text-center px-4 py-4">LINK</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <ReferralTableRow key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ReferralTable;
