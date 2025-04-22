import React from 'react';

interface FilterBarProps {
    filters: string[];
    onAddFilter: (filter: string) => void;
    onRemoveFilter: (filter: string) => void;
    onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onAddFilter, onRemoveFilter, onClearFilters }) => {
    return (
        <div className="filter-bar">
            {filters.length > 0 && (
                <div className="filter-list">
                    {filters.map((filter) => (
                        <div key={filter} className="filter-item">
                            <span>{filter}</span>
                            <button onClick={() => onRemoveFilter(filter)}>×</button>
                        </div>
                    ))}
                    <button onClick={onClearFilters} className="clear-filters">
                        Clear All
                    </button>
                </div>
            )}
            {/* {TODO: 見直し必要} */}
            <div className="add-filter">
                <input
                    type="text"
                    placeholder="Add a filter"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            onAddFilter(e.currentTarget.value.trim());
                            e.currentTarget.value = '';
                        }
                    }}
                />
                <button
                    onClick={() => {
                        const input = document.querySelector<HTMLInputElement>('.add-filter input');
                        if (input && input.value.trim()) {
                            onAddFilter(input.value.trim());
                            input.value = '';
                        }
                    }}
                >
                    Add Filter
                </button>
            </div>
        </div>
    );
};

export default FilterBar;