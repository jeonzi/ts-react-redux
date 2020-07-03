import React from "react"
import useCounter from "../hooks/useCounter"

/** Presentational Component */
// Presentational과 Container를 분리해서 사용하는 경우
// type CounterProps = {
//   count: number
//   onIncrease: () => void
//   onDecrease: () => void
//   onIncreaseBy: (diff: number) => void
// }
//
// function Counter({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//       <button onClick={() => onIncreaseBy(5)}>+5</button>
//     </div>
//   )
// }

// Presentational 구분 하지 않을 때, useCounter의 Hook을 사용한다
function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  )
}

export default Counter
