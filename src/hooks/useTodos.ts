import { useSelector } from "react-redux"
import { RootState } from "../modules"

// 할 일 항목 조회
export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todos)
  return todos
}
