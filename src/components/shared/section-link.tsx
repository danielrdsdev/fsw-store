import { ArrowRight } from 'lucide-react'
import Link, { LinkProps } from 'next/link'

type SectionLinkProps = LinkProps & {
  children: string
}

export const SectionLink = ({ children, ...props }: SectionLinkProps) => {
  return (
    <Link
      {...props}
      className="inline-flex items-center hover:underline underline-offset-2 group uppercase font-bold"
    >
      {children}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-all" />
    </Link>
  )
}
