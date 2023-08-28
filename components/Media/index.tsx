import { ReactNode } from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

type Props = {
  caption?: string
  isFullWidth?: boolean
  children: ReactNode
}

export default function Media({ caption, isFullWidth, children }: Props) {
  return (
    <div className={cx(styles.mediaCont, { [styles.fullWidth]: isFullWidth })}>
      {children}
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}
