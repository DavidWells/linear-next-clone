import React from 'react'

import SignalUrgentIcon from 'assets/icons/claim.svg'
import SignalNoPriorityIcon from 'assets/icons/dots.svg'
import SignalMediumIcon from 'assets/icons/signal-medium.svg'
import SignalStrongIcon from 'assets/icons/signal-strong.svg'
import SignalWeakIcon from 'assets/icons/signal-weak.svg'
import classNames from 'classnames'
import { Priority } from 'types/issue'

interface Props {
  priority: string
  className?: string
}

const ICONS = {
  [Priority.HIGH]: SignalStrongIcon,
  [Priority.MEDIUM]: SignalMediumIcon,
  [Priority.LOW]: SignalWeakIcon,
  [Priority.URGENT]: SignalUrgentIcon,
  [Priority.NO_PRIORITY]: SignalNoPriorityIcon,
}

export default function PriorityIcon({ priority, className }: Props) {
  const classes = classNames('w-3.5 h-3.5 rounded', className)

  const Icon = ICONS[priority]

  return <Icon className={classes} />
}
