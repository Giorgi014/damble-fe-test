type PaymentPartners = {
  id: number;
  src: string;
  name: string;
  className: string;
};

export const paymentPartners: PaymentPartners[] = [
  {
    id: 1,
    src: "/img/apple-pay.svg",
    name: "Apple Pay",
    className: "w-[45.85px] h-[19.86px] mr-[11.15px]",
  },
  {
    id: 2,
    src: "/img/google-pay.svg",
    name: "Google Pay",
    className: "w-[41.48px] h-[16.06px] mr-[11.52px]",
  },
  {
    id: 3,
    src: "/img/mastercard.svg",
    name: "Mastercard",
    className: "w-[32.71px] h-[21px] mr-[11.29px]",
  },
  {
    id: 4,
    src: "/img/visa.svg",
    name: "Visa",
    className: "w-[41.81px] h-[13.54px]",
  },
  {
    id: 5,
    src: "/img/samsung-pay.svg",
    name: "Samsung Pay",
    className: "w-[123.49px] h-[21.7px] mt-[13px]",
  },
];
