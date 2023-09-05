import { ReactNode } from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

type Props = {
  caption?: string
  isFullWidth?: boolean
  isCentered?: boolean
  children: ReactNode
}

export default function MultiMedia({
  caption,
  isFullWidth,
  isCentered = true,
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <div
        className={cx(styles.multiMediaCont, {
          [styles.fullWidth]: isFullWidth,
          [styles.centered]: isCentered,
        })}
      >
        {children}
      </div>
      {caption && (
        <p
          className={cx(styles.caption, {
            [styles.centered]: isCentered,
          })}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
