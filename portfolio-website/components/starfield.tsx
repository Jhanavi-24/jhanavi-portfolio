"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  twinkleSpeed: number
  twinkleOffset: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let stars: Star[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      initStars()
    }

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 4000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }))
    }

    let time = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Deep space gradient background
      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bg.addColorStop(0, "#020817")
      bg.addColorStop(0.4, "#040d1f")
      bg.addColorStop(1, "#020817")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nebula blobs
      const drawNebula = (x: number, y: number, r: number, color: string, alpha: number) => {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0, color.replace(")", `, ${alpha})`).replace("rgb", "rgba"))
        grad.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      drawNebula(canvas.width * 0.15, canvas.height * 0.2, canvas.width * 0.35, "rgb(14, 165, 233)", 0.04)
      drawNebula(canvas.width * 0.85, canvas.height * 0.15, canvas.width * 0.3, "rgb(168, 85, 247)", 0.035)
      drawNebula(canvas.width * 0.5, canvas.height * 0.6, canvas.width * 0.4, "rgb(6, 182, 212)", 0.025)
      drawNebula(canvas.width * 0.7, canvas.height * 0.8, canvas.width * 0.25, "rgb(139, 92, 246)", 0.03)

      // Stars
      time += 0.016
      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset)
        const opacity = star.opacity * (0.6 + 0.4 * twinkle)
        const size = star.size * (0.9 + 0.1 * twinkle)

        ctx.beginPath()
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2)

        // Color variation: mostly white, some blue, some purple
        const hue = Math.random() < 0.7 ? "255,255,255" : Math.random() < 0.5 ? "147,210,255" : "200,150,255"
        ctx.fillStyle = `rgba(${hue}, ${opacity})`
        ctx.fill()

        // Rare large stars get a glow
        if (star.size > 1.4) {
          const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, size * 4)
          glow.addColorStop(0, `rgba(147,210,255,${opacity * 0.4})`)
          glow.addColorStop(1, "rgba(0,0,0,0)")
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(star.x, star.y, size * 4, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
