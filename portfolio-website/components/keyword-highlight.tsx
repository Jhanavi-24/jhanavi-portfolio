import type { ReactNode } from "react"

interface KeywordHighlightProps {
  children: ReactNode
}

export function Highlight({ children }: KeywordHighlightProps) {
  return <span className="keyword-highlight font-medium">{children}</span>
}
