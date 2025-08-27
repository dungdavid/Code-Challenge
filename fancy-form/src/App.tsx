import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import type { ICurrency, ICurrencyWithLogo } from "./types/currency.type";
import CurrencySelect from "./components/CurrencySelect";
import { TbTransfer } from "react-icons/tb";

const API_URL = "https://interview.switcheo.com/prices.json";
const ICON_BASE =
  "https://raw.githubusercontent.com/Switcheo/token-icons/c884d9c223e70c70efae3ece3dc9eaffba28ca56/tokens";

function App() {
  const [selectedOne, setSelectedOne] = useState<ICurrencyWithLogo | null>(
    null
  );
  const [selectedTwo, setSelectedTwo] = useState<ICurrencyWithLogo | null>(
    null
  );
  const [allList, setAllList] = useState<ICurrencyWithLogo[]>([]);
  const [amount, setAmount] = useState<number | null>(null);

  async function getCurrencyData() {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error) {
      console.log("something went wrong when fetch currencies: ", error);
    }
  }

  async function processData() {
    const currencies: ICurrency[] = await getCurrencyData();

    const currenciesWithLogo: ICurrencyWithLogo[] = currencies.map((item) => {
      return {
        ...item,
        logo: `${ICON_BASE}/${item.currency}.svg`,
      };
    });

    setSelectedOne(currenciesWithLogo[0]);
    setSelectedTwo(currenciesWithLogo[1]);
    setAllList(currenciesWithLogo);
  }

  useEffect(() => {
    processData();
  }, []);

  const result = useMemo(() => {
    if (!amount || !selectedOne || !selectedTwo) return "";

    return swapPriceAmount(Number(amount), selectedOne, selectedTwo);
  }, [selectedOne, selectedTwo, amount]);

  function swapPriceAmount(
    amount: number,
    from: ICurrencyWithLogo,
    to: ICurrencyWithLogo
  ) {
    return (amount / from.price) * to.price;
  }

  return (
    <div className="flex items-center justify-center text-white h-screen">
      <div className="flex flex-col gap-6 rounded-3xl max-w-2xl bg-[#430A5D] items-center justify-center p-10 border-2">
        <p className="uppercase font-bold text-3xl mb-5">Currency Converter</p>
        <div className="flex flex-col gap-2 w-full  font-bold">
          <label className="uppercase">Enter amount</label>
          <input
            type="number"
            placeholder="0.00"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            className="w-full p-2 bg-white rounded-lg h-10 text-black"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-5 w-full sm:flex-row">
          {selectedOne && (
            <CurrencySelect
              currencies={allList}
              currValue={selectedOne}
              setCurrValue={setSelectedOne}
            />
          )}
          <button
            className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center 
             bg-white text-[#430A5D] cursor-pointer 
             shadow-md hover:shadow-lg 
             hover:bg-[#f9f5ff] 
             hover:text-[#5E17EB] 
             transition-all duration-300 
             active:scale-95"
            onClick={() => {
              const swap = selectedOne;
              setSelectedOne(selectedTwo);
              setSelectedTwo(swap);
            }}
          >
            <TbTransfer className="w-6 h-6 sm:w-11 sm:h-11 " />
          </button>
          {selectedTwo && (
            <CurrencySelect
              currencies={allList}
              currValue={selectedTwo}
              setCurrValue={setSelectedTwo}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 w-full  font-bold">
          <label className="uppercase">Received amount</label>
          <input
            type="number"
            value={result}
            disabled={true}
            className="w-full p-2 bg-white rounded-lg h-10 text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
