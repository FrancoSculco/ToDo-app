import type React from "react";
import { FILTERS_BUTTON } from "../constants";
import type { FilterValue } from "../types";
import '../styles/FiltersStyles.css';

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTON).map(([key, {href, literal}]) => {
          const isSelected = key === filterSelected;
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href}
                 className={className}
                 onClick={e => {
                  e.preventDefault();
                  onFilterChange(key as FilterValue)
                 }}
                 
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
};