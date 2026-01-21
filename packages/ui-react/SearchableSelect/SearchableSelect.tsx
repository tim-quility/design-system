import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './SearchableSelect.css';
// Assuming Icon has its own .d.ts or is a simple component. 
// If not, you might need a simplified type for it.
import Icon from '../icon/Icon';

// 1. Define the shape of a single option
export interface Option {
    label: string;
    value: string | number;
    disabled?: boolean;
    tooltip?: string;
    [key: string]: any; // Allow for other extra props if necessary
}

// 2. Define the Props interface
interface SearchableSelectProps {
    options?: Option[];
    value?: string | number | null;
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    onOptionDelete?: (value: string | number) => void;
    disableSearch?: boolean;
    selectedItemClassName?: string;
    disabledTooltip?: string;
}

// 3. Define internal state types
interface Coords {
    top: number;
    left: number;
    width: number;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
    options = [],
    value,
    onChange,
    placeholder = "Select...",
    className = "",
    disabled = false,
    onOptionDelete,
    disableSearch = false,
    selectedItemClassName = "",
    disabledTooltip = "This option is disabled"
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [coords, setCoords] = useState<Coords>({ top: 0, left: 0, width: 0 });

    // 4. Type the Refs with specific HTML Elements
    const wrapperRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Calculate position and toggle open
    const toggleOpen = () => {
        if (disabled) return;

        if (!isOpen && wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            // Adjust for scrolling
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            setCoords({
                top: rect.bottom + scrollTop + 4,
                left: rect.left + scrollLeft,
                width: rect.width
            });
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            // Check if click is outside both the trigger (wrapper) and the portal dropdown
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(target)
            ) {
                setIsOpen(false);
                setSearchTerm('');
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on scroll or resize to keep UI clean
    useEffect(() => {
        if (!isOpen) return;

        const handleScrollOrResize = (e: Event) => {
            // Prevent closing if the scroll event comes from inside the dropdown
            if (dropdownRef.current && dropdownRef.current.contains(e.target as Node)) {
                return;
            }
            setIsOpen(false);
        };

        window.addEventListener('scroll', handleScrollOrResize, true);
        window.addEventListener('resize', handleScrollOrResize);
        return () => {
            window.removeEventListener('scroll', handleScrollOrResize, true);
            window.removeEventListener('resize', handleScrollOrResize);
        }
    }, [isOpen]);

    // Focus input when opening
    useEffect(() => {
        if (isOpen && !disableSearch) {
            setTimeout(() => {
                if (inputRef.current) inputRef.current.focus();
            }, 50);
        }
    }, [isOpen, disableSearch]);

    const filteredOptions = useMemo(() => {
        if (!searchTerm || disableSearch) return options;
        return options.filter(opt =>
            opt.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [options, searchTerm, disableSearch]);

    const selectedOption = options.find(o => o.value === value);

    const handleSelect = (val: string | number) => {
        onChange(val);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(''); // Assuming generic usage allows empty string as clear
        setIsOpen(false);
    };

    // Note: This function was defined in the original code but only partially implemented in the JSX
    // (The JSX had a placeholder comment {/* ... delete button ... */})
    // I have kept the function here to satisfy types.
    const handleDeleteOption = (e: React.MouseEvent, val: string | number) => {
        e.stopPropagation();
        if (onOptionDelete) {
            onOptionDelete(val);
        }
    };

    return (
        <div className={`ss-wrapper ${className}`} ref={wrapperRef}>
            {/* Trigger Button */}
            <div
                onClick={toggleOpen}
                tabIndex={disabled ? -1 : 0}
                className={`ss-trigger ${disabled ? 'is-disabled' : ''}`}
            // Keyboard accessibility can be improved here, but kept 1:1 with logic provided
            >
                <span className="ss-trigger__label">
                    {selectedOption ? (
                        <span className="ss-trigger__text-selected">{selectedOption.label}</span>
                    ) : (
                        <span className="ss-trigger__placeholder">{placeholder}</span>
                    )}
                </span>

                <div className="ss-trigger__actions">
                    {/* Clear Button - Show if value is present, not disabled */}
                    {value && !disabled && (
                        <button
                            onClick={handleClear}
                            className="ss-action-btn"
                            title="Clear selection"
                            type="button"
                        >
                            <Icon name="x-close-q" size={14} />
                        </button>
                    )}
                    <div className={`ss-arrow ${isOpen ? 'is-open' : ''}`}>
                        <Icon name="chevron-down" size={16} />
                    </div>
                </div>
            </div>

            {/* Dropdown Menu - Rendered in Portal to avoid overflow clipping */}
            {isOpen && createPortal(
                <div
                    ref={dropdownRef}
                    className="ss-dropdown"
                    style={{
                        position: 'absolute',
                        top: coords.top,
                        left: coords.left,
                        width: coords.width,
                        zIndex: 9999
                    }}
                >
                    {/* Search Input - Conditional */}
                    {!disableSearch && (
                        <div className="ss-search-container">
                            <div className="ss-search-wrapper">
                                <span className="ss-search-icon">
                                    <Icon name="q-search" size={14} />
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="ss-search-input"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    onClick={e => e.stopPropagation()} // Prevent closing
                                />
                            </div>
                        </div>
                    )}

                    {/* Options List */}
                    <div className="ss-list">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt) => {
                                const isSelected = opt.value === value;
                                const isDisabled = opt.disabled;

                                // Logic: Use specific tooltip, or fallback to default if disabled
                                const titleText = opt.tooltip
                                    ? opt.tooltip
                                    : (isDisabled ? disabledTooltip : '');

                                return (
                                    <div
                                        key={opt.value}
                                        title={titleText}
                                        className={`
                                            ss-option 
                                            ${isSelected ? 'is-selected' : ''}
                                            ${isDisabled ? 'is-disabled' : ''}
                                            ${isSelected && selectedItemClassName ? selectedItemClassName : ''}
                                        `}
                                        onClick={() => !isDisabled && handleSelect(opt.value)}
                                    >
                                        <span className="ss-option__label">{opt.label}</span>

                                        {/* The original code had a placeholder for delete button logic here.
                                          If you need the delete button, uncomment below:
                                          
                                          {onOptionDelete && (
                                              <button 
                                                  onClick={(e) => handleDeleteOption(e, opt.value)}
                                                  className="ss-option-delete"
                                              >
                                                  <Icon name="trash" size={12} />
                                              </button>
                                          )}
                                        */}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="ss-no-results">No matching options found</div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default SearchableSelect;