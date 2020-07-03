// 리덕스 코드를 작성할 때, Ducks 패턴 사용

// 액션 type 선언(여기서 type은 Typescript의 type이 아니라 Redux Action 안에 들어가게 될 type!!!!)
const INCREASE = "counter/INCREASE" as const // as const : const assertions => 액션 생성 함수로 액션 객체 만들었을 때 타입이 string이 아니라 실제 값을 가리키게 함
const DECREASE = "counter/DECREASE" as const
const INCREASE_BY = "counter/INCREASE_BY" as const

// 액션 생성 함수 선언
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff })

// 액션 객체들에 대한 type 준비
type CounterAction =
  | ReturnType<typeof increase> // ReturnType : 함수에서 return type을 가져올 수 있게 해주는 util type
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>

// state(상태)의 type과 초기값 선언 (type or interface로 써도 무방. But 하나로 통일되게 쓰는 것이 좋다)
type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

// Reducer 작성
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 }
    case DECREASE:
      return { count: state.count - 1 }
    case INCREASE_BY:
      return { count: state.count + action.payload }
    default:
      return state
  }
}

export default counter
