"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  pulse: number
  pulseSpeed: number
}

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    })
    canvas.addEventListener("mouseleave", () => {
      mouseRef.current = { x: -9999, y: -9999 }
    })

    // Create nodes
    const NODE_COUNT = 80
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
    }))

    const CONNECT_DIST = 120
    const MOUSE_ATTRACT = 150

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.pulse += n.pulseSpeed

        // Soft boundary bounce
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1

        // Mouse repulsion/constellation pull
        const dx = mx - n.x
        const dy = my - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_ATTRACT) {
          const force = (MOUSE_ATTRACT - dist) / MOUSE_ATTRACT * 0.015
          n.vx -= dx * force
          n.vy -= dy * force
        }

        // Speed limit
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (speed > 0.8) { n.vx *= 0.8 / speed; n.vy *= 0.8 / speed }
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.35

            // Check if either node is near mouse — highlight those connections
            const aDist = Math.sqrt((mx - a.x) ** 2 + (my - a.y) ** 2)
            const bDist = Math.sqrt((mx - b.x) ** 2 + (my - b.y) ** 2)
            const highlighted = aDist < MOUSE_ATTRACT || bDist < MOUSE_ATTRACT

            if (highlighted) {
              const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
              grad.addColorStop(0, `rgba(56,189,248,${alpha * 2.5})`)
              grad.addColorStop(0.5, `rgba(168,85,247,${alpha * 2})`)
              grad.addColorStop(1, `rgba(56,189,248,${alpha * 2.5})`)
              ctx.strokeStyle = grad
              ctx.lineWidth = 0.8
            } else {
              ctx.strokeStyle = `rgba(148,163,184,${alpha})`
              ctx.lineWidth = 0.4
            }
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulsed = n.size * (1 + 0.3 * Math.sin(n.pulse))
        const aDist = Math.sqrt((mx - n.x) ** 2 + (my - n.y) ** 2)
        const near = aDist < MOUSE_ATTRACT

        if (near) {
          // Glowing node near cursor
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulsed * 5)
          glow.addColorStop(0, `rgba(56,189,248,0.8)`)
          glow.addColorStop(0.4, `rgba(168,85,247,0.3)`)
          glow.addColorStop(1, `rgba(0,0,0,0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulsed * 5, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = "#ffffff"
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulsed * 1.5, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = `rgba(148,163,184,${n.opacity * (0.7 + 0.3 * Math.sin(n.pulse))})`
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulsed, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}
