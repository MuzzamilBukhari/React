import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import { useState } from "react";

interface myObject {
  [key: string]: any;
}

function App() {
  const [amount, setAmount] = useState(0);
  const [fromSelectedCurrency, setFromSelectedCurrency] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [toSelectedCurrency, setToSelectedCurrency] = useState("pkr");

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setToSelectedCurrency(fromSelectedCurrency);
    setFromSelectedCurrency(toSelectedCurrency);
  };
  const currencyInfo: myObject = useCurrencyInfo(fromSelectedCurrency);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toSelectedCurrency]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={fromSelectedCurrency}
                  onCurrencyChange={(currency) =>
                    setFromSelectedCurrency(currency)
                  }
                  currencyOptions={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  type="button"
                  onClick={() => swap()}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="to"
                  amount={convertedAmount}
                  amountDisable={true}
                  // onAmountChange={(amount) => setConvertedAmount(amount)}
                  selectedCurrency={toSelectedCurrency}
                  onCurrencyChange={(currency) =>
                    setToSelectedCurrency(currency)
                  }
                  currencyOptions={options}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {fromSelectedCurrency.toUpperCase()} to{" "}
                {toSelectedCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
