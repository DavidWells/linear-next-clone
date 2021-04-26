import React, { ReactNode, useState } from 'react';

import CancelIcon from 'assets/icons/cancel.svg';
import BacklogIcon from 'assets/icons/circle-dot.svg';
import TodoIcon from 'assets/icons/circle.svg';
import DoneIcon from 'assets/icons/done.svg';
import InProgressIcon from 'assets/icons/half-circle.svg';
import { Portal } from 'components/Portal';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Status } from 'types/issue';

import { Menu } from './menu';

interface Props {
  id: string;
  button: ReactNode;
  className?: string;
  onSelect?: (item: any) => void;
}
export default function StatusMenu({
  id, button, className, onSelect,
}: Props) {
  const [keyword, setKeyword] = useState('');
  const handleSelect = (status: string) => {
    if (onSelect) onSelect(status);
  };

  let statuses = [
    [BacklogIcon, Status.BACKLOG, 'Backlog'],
    [TodoIcon, Status.TODO, 'Todo'],
    [InProgressIcon, Status.IN_PROGRESS, 'In Progress'],
    [DoneIcon, Status.DONE, 'Done'],
    [CancelIcon, Status.CANCELED, 'Canceled'],
  ];
  if (keyword != '') {
    const normalizedKeyword = keyword.toLowerCase().trim();
    statuses = statuses.filter(([icon, id, l]) => l.toLowerCase().indexOf(normalizedKeyword) != -1);
  }

  const options = statuses.map(([icon, id, label]) => (
    <Menu.Item
      onClick={() => handleSelect(id)}
    >
      <img src={icon} className="w-3.5 h-3.5 mr-3" />
      <div className="flex-1 overflow-hidden">{label}</div>
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
          size="normal"
          filterKeyword
          className={className}
          searchPlaceholder="Set status..."
          onKeywordChange={(kw) => setKeyword(kw)}
        >
          {options}
        </Menu>
      </Portal>
    </>
  );
}
