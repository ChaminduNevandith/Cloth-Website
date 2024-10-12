import React, { useState } from 'react';
import { BsList, BsGrid3X3GapFill, BsGridFill } from 'react-icons/bs'; 
import { MenuItem, Select, Button, Menu } from '@mui/material'; 
import Sidepanel from '../sidepanel/Sidepanel';

function ShortButtons() {
  const [view, setView] = useState('list');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('Date, new to old');
  
  // States for mobile dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItemsPerPage = (value) => {
    setItemsPerPage(value);
    handleClose();
  };

  const handleSelectSortBy = (value) => {
    setSortBy(value);
    handleClose();
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Filter button (left side) */}
      <div className="flex items-center space-x-4 sm:hidden">
        <Button variant="outlined" size="small">
          Filter
        </Button>
      </div>

      {/* Left-aligned View As buttons (for larger screens) */}
      <div className="flex items-center justify-center md:justify-start flex-grow ">
        <span className="text-sm font-medium hidden sm:inline mr-2">VIEW AS</span>
        <button 
          className={`p-2 ${view === 'list' ? 'bg-gray-200' : ''}`} 
          onClick={() => setView('list')}
        >
          <BsList className="text-xl" />
        </button>
        <button 
          className={`p-2 ${view === 'grid' ? 'bg-gray-200' : ''}`} 
          onClick={() => setView('grid')}
        >
          <BsGridFill className="text-xl" />
        </button>
        <button 
          className={`p-2 ${view === 'large-grid' ? 'bg-gray-200' : ''}`} 
          onClick={() => setView('large-grid')}
        >
          <BsGrid3X3GapFill className="text-xl" />
        </button>
      </div>

      {/* Short button and dropdown (right side, visible on mobile) */}
      <div className="flex items-center space-x-4 ml-auto sm:hidden">
        <Button variant="outlined" size="small" onClick={handleMenuClick}>
          Short
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSelectItemsPerPage(10)}>10</MenuItem>
          <MenuItem onClick={() => handleSelectItemsPerPage(20)}>20</MenuItem>
          <MenuItem onClick={() => handleSelectItemsPerPage(50)}>50</MenuItem>
          <MenuItem onClick={() => handleSelectSortBy("Date, new to old")}>Date, new to old</MenuItem>
          <MenuItem onClick={() => handleSelectSortBy("Date, old to new")}>Date, old to new</MenuItem>
          <MenuItem onClick={() => handleSelectSortBy("Price, low to high")}>Price, low to high</MenuItem>
          <MenuItem onClick={() => handleSelectSortBy("Price, high to low")}>Price, high to low</MenuItem>
        </Menu>
      </div>

      {/* Items Per Page & Sort By (right side, hidden on mobile) */}
      <div className="hidden sm:flex items-center space-x-4">
        {/* Items Per Page */}
        <div className="flex items-center space-x-2">
          <span className="text-[12px] font-medium">ITEMS PER PAGE</span>
          <Select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            variant="outlined"
            size="small"
            className="min-w-[60px]"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <span className="text-[12px] font-medium ">SORT BY</span>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="outlined"
            size="small"
            className="min-w-[140px]"
          >
            <MenuItem value="Date, new to old">Date, new to old</MenuItem>
            <MenuItem value="Date, old to new">Date, old to new</MenuItem>
            <MenuItem value="Price, low to high">Price, low to high</MenuItem>
            <MenuItem value="Price, high to low">Price, high to low</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ShortButtons;
