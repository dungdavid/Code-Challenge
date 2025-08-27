import type { ICurrencyWithLogo } from "../types/currency.type";

interface ICurrencySelectProps {
  currencies: ICurrencyWithLogo[];
  currValue: ICurrencyWithLogo
  setCurrValue: React.Dispatch<React.SetStateAction<ICurrencyWithLogo | null>>
}

export default function CurrencySelect({ currencies, currValue, setCurrValue }: ICurrencySelectProps) {


  return (
    <div className="flex items-center gap-2 border-2 p-2 bg-white text-black font-bold rounded-lg max-h-12 sm:w-40 w-full">
      <img
        src={currValue.logo}
        alt={currValue.currency}
        className="w-7 max-h-full"
      />
      <select
        onChange={(e) => {
          const selected = currencies.find(
            (item) => item.currency === e.target.value
          );

          if (selected) {
            setCurrValue(selected);
          }
        }}
        value={currValue.currency}
        className="w-full"
      >
        {currencies.map((item, index) => (
          <option key={`${index}-${item.currency}`} value={item.currency}>
            {item.currency}
          </option>
        ))}
      </select>
    </div>
  );
}
