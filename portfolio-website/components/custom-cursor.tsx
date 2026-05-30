"use client"

import { useEffect, useRef, useState } from "react"

interface Trail {
  x: number
  y: number
  size: number
  alpha: number
  hue: number
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailsRef = useRef<Trail[]>([])
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = "none"

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      setVisible(true)

      // Add comet trail particle
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 1,
        alpha: 1,
        hue: Math.random() < 0.6 ? 200 : 280, // sky-blue or purple
      })
      if (trailsRef.current.length > 60) trailsRef.current.shift()
    }

    const onLeave = () => setVisible(false)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    // Track hoverable elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(
        el.closest("a, button, [role=button], input, textarea") !== null
      )
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mouseover", onOver)

    // Animation loop
    let angle = 0
    const animate = () => {
      // Move dot instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`
      }

      // Lag the ring for smooth follow
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12
      if (ringRef.current) {
        const size = hovering ? 44 : clicking ? 20 : 32
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - size / 2}px, ${ringPosRef.current.y - size / 2}px)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
      }

      angle += 0.05

      // Draw comet trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      trailsRef.current = trailsRef.current.filter((t) => t.alpha > 0.01)
      for (let i = 0; i < trailsRef.current.length; i++) {
        const t = trailsRef.current[i]
        t.alpha *= 0.88
        t.size *= 0.95

        const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.size * 2)
        grad.addColorStop(0, `hsla(${t.hue}, 90%, 70%, ${t.alpha})`)
        grad.addColorStop(1, `hsla(${t.hue}, 90%, 70%, 0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.size * 2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.documentElement.style.cursor = ""
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [clicking, hovering])

  return (
    <>
      {/* Comet trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9998 }}
      />

      {/* Core dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 9999,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffffff 0%, #38bdf8 60%, #a855f7 100%)",
          boxShadow: "0 0 8px 2px rgba(56,189,248,0.8), 0 0 20px 4px rgba(168,85,247,0.4)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Orbital ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 9999,
          borderRadius: "50%",
          border: `1.5px solid rgba(56,189,248,${hovering ? 0.9 : 0.5})`,
          boxShadow: hovering
            ? "0 0 12px rgba(56,189,248,0.5), inset 0 0 8px rgba(56,189,248,0.2)"
            : "0 0 6px rgba(56,189,248,0.3)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, width 0.15s, height 0.15s, box-shadow 0.2s",
          background: hovering ? "rgba(56,189,248,0.05)" : "transparent",
        }}
      />
    </>
  )
}
