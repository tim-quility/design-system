import React, { useState } from 'react';
import './Tabs.css';

/**
 * @typedef {Object} TabItem
 * @property {string} id
 * @property {React.ReactNode} label
 * @property {React.ReactNode} content
 */

/**
 * @param {Object} props
 * @param {TabItem[]} props.items
 * @param {'line'|'contained'} [props.variant='line']
 * @param {string} [props.defaultActiveId]
 * @param {(id: string) => void} [props.onChange]
 * @param {string} [props.className]
 */
interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  variant?: 'line' | 'contained';
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items = [],
  variant = 'line',
  defaultActiveId,
  onChange,
  className = ''
}) => {
  // Initialize state with defaultId or the first item's ID
  const [activeTabId, setActiveTabId] = useState(defaultActiveId || (items[0] ? items[0].id : null));

  const handleTabClick = (id: string) => {
    setActiveTabId(id);
    if (onChange) {
      onChange(id);
    }
  };

  // Find the content for the currently active tab
  const activeContent = items.find(item => item.id === activeTabId)?.content;

  return (
    <div className={`tabs-container ${className}`}>

      {/* Navigation List */}
      <div
        className="tabs-header"
        role="tablist"
        aria-label="Content Navigation"
      >
        {items.map((item) => {
          const isActive = activeTabId === item.id;

          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`tab-item variant-${variant} ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(item.id)}
              data-type={variant === 'line' ? 'Line' : 'Contained'}
              data-state={isActive ? 'Active' : 'Default'}
            >
              <div className="tab-content-wrapper">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Content Panel */}
      <div
        className="tab-panel"
        role="tabpanel"
        id={`panel-${activeTabId}`}
        aria-labelledby={`tab-${activeTabId}`}
      >
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;