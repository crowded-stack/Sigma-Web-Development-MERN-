import { useState, useMemo } from "react";

const nums = new Array(12_000_000).fill(0).map((_, i) => {
  return {
    i,
    isMagical: i === 11_000_000,
  };
});

function App() {
  // const [count, updateCount] = useState(0);
  let count = 0;
  const [numbers, updateNumbers] = useState(nums);
  const magical = useMemo(() => {
    return numbers.find((item) => item.isMagical);
  }, [numbers]);

  return (
    <>
      <div>Magical Number is {magical.i}</div>
      <button
        onClick={() => {
          count++;
          if (count == 12) {
            updateNumbers(
              new Array(10_000_000).fill(1).map((_, i) => {
                return {
                  i,
                  isMagical: i === 9_000_000,
                };
              })
            );
          }
          console.log(numbers.length);
          console.log(`count = ${count}`);
        }}
      >
        Counter {count}
      </button>
    </>
  );
}

export default App;
