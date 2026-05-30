"use client"

import dynamic from "next/dynamic"

const CustomCursor = dynamic(
  () => import("@/components/custom-cursor").then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
)

export function CursorLoader() {
  return <CustomCursor />
}
