import { ArrowRight } from 'lucide-react'
import Link, { LinkProps } from 'next/link'

type SectionLinkProps = LinkProps & {
  children: string
}

export const SectionLink = ({ children, ...props }: SectionLinkProps) => {
  return (
    <Link
      {...props}
      className="group inline-flex items-center font-bold uppercase underline-offset-2 hover:underline"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-2" />
    </Link>
  )
}
