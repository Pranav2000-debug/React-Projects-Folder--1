import { useEffect, useState } from "react";

// Fetching data based on currency change from different APIs for a given currency.
// useEffect depends on currency and calls the fetch based on that currency
// data is the actual currency object that we need
export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse[currency]);
        } else {
          throw new Error("Error Fetching data");
        }
      } catch (err) {
        console.error(err);
        setData({});
        return;
      }
    }
    fetchCurrency();
  }, [currency]);
  console.log(data);
  return data;
}
