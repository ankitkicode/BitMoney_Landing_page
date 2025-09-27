import React, { useRef, useEffect } from "react";

const BottomToTopWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let cols = 60;
    let rows = 40;
    let spacing = 40;
    let time = 0;
    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let centerX = canvas.width / 2;

      for (let y = 0; y < rows; y++) {
        for (let x = -cols / 2; x < cols / 2; x++) {
          let depth = y + 1;
          let scale = 1 / (depth * 0.1);

          // wave animation along Y-axis
          let wave = Math.sin(time + x * 0.3 + y * 0.5) * 15;

          // coordinates
          let drawX = centerX + x * spacing * scale;
          let drawY = canvas.height - (y * spacing + wave);

          let radius = 2 * scale;

          if (drawY > 0 && drawY < canvas.height) {
            ctx.beginPath();
            ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + scale * 0.8})`;
            ctx.fill();
          }
        }
      }

      time += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: "-200px",
        width: "150%",
        height: "100%",
        zIndex: 1,
        background: "transparent",
      }}
    />
  );
};

export default BottomToTopWave;
