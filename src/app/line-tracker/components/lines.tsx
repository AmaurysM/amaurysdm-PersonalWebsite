"use client"

import { useEffect, useRef } from 'react';

interface ControlPoint {
  x: number;
  y: number;
}

interface Line {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  cp1x: number;
  cp1y: number;
  cp2x: number;
  cp2y: number;
  progress: number;
  speed: number;
  age: number;
  maxAge: number;
  fadeOutStart: number | null;
}

export default function AnimatedTaxiLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const lines: Line[] = [];
    const maxLines = 8;

    const createLine = () => {
      const startEdge = Math.floor(Math.random() * 4);
      let startX, startY, endX, endY;
      
      // Determine start and end points on opposite edges
      switch(startEdge) {
        case 0: // top to bottom
          startX = Math.random() * canvas.width;
          startY = 0;
          endX = Math.random() * canvas.width;
          endY = canvas.height;
          break;
        case 1: // right to left
          startX = canvas.width;
          startY = Math.random() * canvas.height;
          endX = 0;
          endY = Math.random() * canvas.height;
          break;
        case 2: // bottom to top
          startX = Math.random() * canvas.width;
          startY = canvas.height;
          endX = Math.random() * canvas.width;
          endY = 0;
          break;
        case 3: // left to right
          startX = 0;
          startY = Math.random() * canvas.height;
          endX = canvas.width;
          endY = Math.random() * canvas.height;
          break;
        default:
          startX = 0;
          startY = Math.random() * canvas.height;
          endX = canvas.width;
          endY = Math.random() * canvas.height;
      }
      
      // Random control points for curve (offset by a larger amount for more dramatic turns)
      const curveIntensity = 0.4 + Math.random() * 0.3; // 0.4-0.7
      const randomOffset = 300 + Math.random() * 200; // 300-500
      
      // First control point (closer to start)
      const cp1x = startX + (endX - startX) * 0.33 + (Math.random() - 0.5) * randomOffset;
      const cp1y = startY + (endY - startY) * 0.33 + (Math.random() - 0.5) * randomOffset;
      
      // Second control point (closer to end)
      const cp2x = startX + (endX - startX) * 0.66 + (Math.random() - 0.5) * randomOffset;
      const cp2y = startY + (endY - startY) * 0.66 + (Math.random() - 0.5) * randomOffset;

      return {
        startX,
        startY,
        endX,
        endY,
        cp1x,
        cp1y,
        cp2x,
        cp2y,
        progress: 0,
        speed: 0.002 + Math.random() * 0.003, // Slower speed for smoother animation
        age: 0,
        maxAge: 400 + Math.random() * 300,
        fadeOutStart: null
      };
    };

    // Calculate a point on a cubic Bezier curve
    const bezierPoint = (t: number, p0: number, p1: number, p2: number, p3: number): number => {
      const mt = 1 - t;
      return mt * mt * mt * p0 + 
             3 * mt * mt * t * p1 + 
             3 * mt * t * t * p2 + 
             t * t * t * p3;
    };

    // Calculate derivative (tangent) at a point on the curve
    const bezierTangent = (t: number, p0: number, p1: number, p2: number, p3: number): number => {
      const mt = 1 - t;
      return -3 * mt * mt * p0 + 
             3 * mt * mt * p1 - 
             6 * mt * t * p1 - 
             3 * t * t * p2 + 
             6 * mt * t * p2 + 
             3 * t * t * p3;
    };

    // Calculate point on curve with perpendicular offset for edge lines
    const getPointOnCurve = (line: Line, t: number, offset: number = 0) => {
      const x = bezierPoint(t, line.startX, line.cp1x, line.cp2x, line.endX);
      const y = bezierPoint(t, line.startY, line.cp1y, line.cp2y, line.endY);
      
      if (offset === 0) return { x, y };
      
      // Calculate tangent to get perpendicular direction
      const dx = bezierTangent(t, line.startX, line.cp1x, line.cp2x, line.endX);
      const dy = bezierTangent(t, line.startY, line.cp1y, line.cp2y, line.endY);
      
      // Normalize and rotate 90 degrees for perpendicular
      const length = Math.sqrt(dx * dx + dy * dy);
      if (length === 0) return { x, y };
      
      const perpX = -dy / length * offset;
      const perpY = dx / length * offset;
      
      return {
        x: x + perpX,
        y: y + perpY
      };
    };

    const drawTaxiLine = (line: Line, opacity: number) => {
      ctx.save();
      
      const segments = 100; // Number of segments for smooth curve drawing
      const edgeOffset = 15;
      
      // Draw solid edge lines (white)
      ctx.strokeStyle = `rgba(226, 232, 240, ${opacity * 0.3})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      
      // Draw top/left edge line
      ctx.beginPath();
      for (let i = 0; i <= segments * line.progress; i++) {
        const t = i / segments;
        if (t > line.progress) break;
        
        const point = getPointOnCurve(line, t, -edgeOffset);
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }
      ctx.stroke();
      
      // Draw bottom/right edge line
      ctx.beginPath();
      for (let i = 0; i <= segments * line.progress; i++) {
        const t = i / segments;
        if (t > line.progress) break;
        
        const point = getPointOnCurve(line, t, edgeOffset);
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }
      ctx.stroke();

      // Draw center dashed line (yellow)
      ctx.strokeStyle = `rgba(234, 179, 8, ${opacity * 0.4})`;
      ctx.lineWidth = 3;
      ctx.setLineDash([20, 15]);
      
      ctx.beginPath();
      for (let i = 0; i <= segments * line.progress; i++) {
        const t = i / segments;
        if (t > line.progress) break;
        
        const point = getPointOnCurve(line, t);
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new lines if needed
      if (lines.length < maxLines && Math.random() < 0.02) {
        lines.push(createLine());
      }

      // Update and draw lines
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        
        // Update progress
        line.progress = Math.min(line.progress + line.speed, 1);
        line.age++;

        // Handle fade out
        let opacity = 1;
        if (line.progress >= 1 && !line.fadeOutStart) {
          line.fadeOutStart = Date.now() + 500; // Wait 500ms before fading
        }
        
        if (line.fadeOutStart && Date.now() >= line.fadeOutStart) {
          const fadeElapsed = Date.now() - line.fadeOutStart;
          const fadeDuration = 800;
          opacity = Math.max(0, 1 - fadeElapsed / fadeDuration);
        }

        // Calculate opacity based on age
        if (line.age > line.maxAge * 0.7) {
          const ageOpacity = 1 - ((line.age - line.maxAge * 0.7) / (line.maxAge * 0.3));
          opacity = Math.min(opacity, ageOpacity);
        }

        // Remove line if completely faded
        if (opacity <= 0 || line.age >= line.maxAge) {
          lines.splice(i, 1);
          continue;
        }

        drawTaxiLine(line, opacity);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start with a few lines
    for (let i = 0; i < 3; i++) {
      lines.push(createLine());
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)'
      }}
    />
  );
}