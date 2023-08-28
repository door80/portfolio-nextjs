import { ReactNode } from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

type Props = {
  caption?: string
  isFullWidth?: boolean
  children: ReactNode
}

export default function MultiMedia({ caption, isFullWidth, children }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={cx(styles.multiMediaCont, {
          [styles.fullWidth]: isFullWidth,
        })}
      >
        {children}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}
