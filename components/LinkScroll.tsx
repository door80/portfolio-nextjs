'use client'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'

// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>

type LinkScrollProps = AnchorProps & LinkProps & PropsWithChildren

const LinkScroll = ({ children, ...props }: LinkScrollProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)

    elem?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}

export default LinkScroll
