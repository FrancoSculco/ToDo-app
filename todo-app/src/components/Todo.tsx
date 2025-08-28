import type React from "react";
import type { TodoId, Todo as TodoType } from "../types";
import '../styles/TodoStyle.css';

interface Props extends TodoType {
  onRemoveTodo: ({id}: TodoId) => void
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
} 

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {
  return (
    <div className="view">
      <input 
        type="checkbox" 
        className="toggle" 
        checked={completed} 
        onChange={(e) => {
            onToggleCompleteTodo({id, completed: e.target.checked})
        }}
        />

      <label>{title}</label>

      <button
        className="destroy"
        onClick={() => {onRemoveTodo({id})}}
      >X</button>
    </div>
  )
};