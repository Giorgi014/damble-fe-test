const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <article className="flex flex-col items-center justify-center">
      <p className="text-[25px] font-bold leading-[100%] text-[#FFFFFF]">
        {value}
      </p>
      <p className="mt-1 text-[10px] tracking-[0.22em] text-[#8E97A9] uppercase">
        {label}
      </p>
    </article>
  );
};

export default StatCard;
