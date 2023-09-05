import { ReactNode } from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

type Props = {
  caption?: string
  isFullWidth?: boolean
  noMargin?: boolean
  children: ReactNode
}

export default function Media({
  caption,
  isFullWidth,
  noMargin,
  children,
}: Props) {
  return (
    <div
      className={cx(styles.mediaCont, {
        [styles.fullWidth]: isFullWidth,
        [styles.noMargin]: noMargin,
      })}
    >
      {children}
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}
