import React, { ReactNode, useRef, useState } from 'react';

import NoPriorityIcon from 'assets/icons/dots.svg';
import UrgentPriorityIcon from 'assets/icons/rounded-claim.svg';
import MediumPriorityIcon from 'assets/icons/signal-medium.svg';
import HighPriorityIcon from 'assets/icons/signal-strong.svg';
import LowPriorityIcon from 'assets/icons/signal-weak.svg';
import { Portal } from 'components/Portal';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
import { Priority } from 'types/issue';

import { Menu } from './menu';

interface Props {
  id: string;
  button: ReactNode;
  filterKeyword: boolean;
  className?: string;
  onSelect?: (item: string) => void;
}

function PriorityMenu({
  id, button, filterKeyword, className, onSelect,
}: Props) {
  const [keyword, setKeyword] = useState('');

  const handleSelect = (priority: string) => {
    setKeyword('');
    if (onSelect) onSelect(priority);
  };
  let statusOpts = [
    [NoPriorityIcon, 'No priority', Priority.NO_PRIORITY],
    [UrgentPriorityIcon, 'Urgent', Priority.URGENT],
    [HighPriorityIcon, 'High', Priority.HIGH],
    [MediumPriorityIcon, 'Medium', Priority.MEDIUM],
    [LowPriorityIcon, 'Low', Priority.LOW],
  ];
  if (keyword != '') {
    const normalizedKeyword = keyword.toLowerCase().trim();
    statusOpts = statusOpts.filter(([Icon, label, priority]) => (label as string).toLowerCase().indexOf(normalizedKeyword) != -1);
  }

  const options = statusOpts.map(([Icon, label, priority]) => (
    <Menu.Item
      onClick={() => handleSelect(priority as string)}
    >
      <Icon className="mr-3" />
      {' '}
      <span>{label}</span>
    </Menu.Item>
  ));

  return (
    <>
      <ContextMenuTrigger id={id} holdToDisplay={1}>
        {button}
      </ContextMenuTrigger>

      <Portal>
        <Menu
          id={id}
          size="small"
          filterKeyword={filterKeyword}
          searchPlaceholder="Set priority..."
          onKeywordChange={(kw) => setKeyword(kw)}
          className={className}
        >
          {options}
        </Menu>
      </Portal>
    </>
  );
}

PriorityMenu.defaultProps = {
  filterKeyword: false,
};

export default PriorityMenu;
