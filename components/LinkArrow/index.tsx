import { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  href: string
  isExternal?: boolean
  children: ReactNode
}

export default function LinkArrow({ href, isExternal, children }: Props) {
  if (!href) return null
  return (
    <a
      href={href}
      className={styles.linkArrow}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97976 5.6869C8.7845 5.49163 8.7845 5.17505 8.97976 4.97979C9.17502 4.78453 9.4916 4.78453 9.68687 4.97979L12.3535 7.64646C12.5488 7.84172 12.5488 8.1583 12.3535 8.35356L9.68687 11.0202C9.4916 11.2155 9.17502 11.2155 8.97976 11.0202C8.7845 10.825 8.7845 10.5084 8.97976 10.3131L10.7929 8.50001H4.33331C4.05717 8.50001 3.83331 8.27615 3.83331 8.00001C3.83331 7.72387 4.05717 7.50001 4.33331 7.50001H10.7929L8.97976 5.6869Z"
          fill="#413976"
        />
      </svg>
    </a>
  )
}
