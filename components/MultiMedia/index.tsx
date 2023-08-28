import { ReactNode } from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

type Props = {
  isFullWidth?: boolean
  children: ReactNode
}

export default function MultiMedia({ isFullWidth, children }: Props) {
  return (
    <div
      className={cx(styles.multiMediaCont, { [styles.fullWidth]: isFullWidth })}
    >
      {children}
    </div>
  )
}
