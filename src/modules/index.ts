/** Root Reducer */

import { combineReducers } from "redux"
import counter from "./counter"

const rootReducer = combineReducers({
  counter,
})

export default rootReducer

// RootState라는 type을 만들어서 내보내야 함!!!
// WHY?? 후에 컨테이너 컴포넌트를 만들 때 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용할 때 필요
export type RootState = ReturnType<typeof rootReducer>
