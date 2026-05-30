"use client"

import dynamic from "next/dynamic"

const Starfield = dynamic(() => import("@/components/starfield").then((m) => ({ default: m.Starfield })), {
  ssr: false,
})

export function StarfieldLoader() {
  return <Starfield />
}
