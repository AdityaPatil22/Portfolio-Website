import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  animate,
} from "framer-motion";

const TARGET_SELECTOR = ".cursor-target";
const SPIN_MS = 2000; // one full revolution of the reticle
const CORNER = 12; // bracket size in px
const BORDER = 3; // bracket border width in px
const INSET = CORNER / 2 - BORDER; // bracket-center inset from a target rect corner

// Rest positions: bracket centers relative to the cursor dot
const REST = [
  { x: -CORNER, y: -CORNER },
  { x: CORNER, y: -CORNER },
  { x: CORNER, y: CORNER },
  { x: -CORNER, y: CORNER },
];

// Which sides of each 12px bracket box carry a border (tl, tr, br, bl)
const BRACKET_SIDES = [
  "border-r-0 border-b-0",
  "border-l-0 border-b-0",
  "border-l-0 border-t-0",
  "border-r-0 border-t-0",
];

const IS_MOBILE =
  typeof window !== "undefined" &&
  ((("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
    window.innerWidth <= 768) ||
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent
    ));

function TargetCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { stiffness: 900, damping: 60 });
  const cursorY = useSpring(mouseY, { stiffness: 900, damping: 60 });
  const dotScale = useMotionValue(1);

  const cornerEls = useRef([]);
  const pos = useRef([
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
  ]);
  const mode = useRef("spin"); // 'spin' | 'hover' | 'return'
  const angle = useRef(0);
  const returnAt = useRef(0);
  const hoverCorners = useRef(null); // bracket targets in viewport coords
  const activeTarget = useRef(null);

  useAnimationFrame((_, delta) => {
    if (IS_MOBILE) return;
    const dt = Math.min(delta, 50); // clamp deltas after tab switches
    if (mode.current === "spin") {
      angle.current = (angle.current + (dt / SPIN_MS) * 360) % 360;
    }
    // Exponential ease toward the mode's target; tau = time to cover ~63%
    const tau = mode.current === "hover" ? 50 : mode.current === "return" ? 70 : 20;
    const k = 1 - Math.exp(-dt / tau);
    const cx = cursorX.get();
    const cy = cursorY.get();
    const a = (angle.current * Math.PI) / 180;
    const cos = Math.cos(a);
    const sin = Math.sin(a);

    for (let i = 0; i < 4; i++) {
      let tx;
      let ty;
      if (mode.current === "hover") {
        tx = hoverCorners.current[i].x;
        ty = hoverCorners.current[i].y;
      } else {
        const o = REST[i];
        tx = cx + o.x * cos - o.y * sin;
        ty = cy + o.x * sin + o.y * cos;
      }
      const p = pos.current[i];
      p.x += (tx - p.x) * k;
      p.y += (ty - p.y) * k;
      const el = cornerEls.current[i];
      if (el) el.style.transform = `translate(${p.x}px, ${p.y}px)`;
    }

    if (mode.current === "return" && performance.now() - returnAt.current > 320) {
      mode.current = "spin";
    }
  });

  useEffect(() => {
    if (IS_MOBILE) return;

    document.body.style.cursor = "none";

    const leave = () => {
      if (activeTarget.current) {
        activeTarget.current.removeEventListener("mouseleave", leave);
      }
      activeTarget.current = null;
      hoverCorners.current = null;
      mode.current = "return";
      returnAt.current = performance.now();
    };

    const enter = (target) => {
      if (activeTarget.current) {
        activeTarget.current.removeEventListener("mouseleave", leave);
      }
      activeTarget.current = target;
      const rect = target.getBoundingClientRect();
      hoverCorners.current = [
        { x: rect.left + INSET, y: rect.top + INSET },
        { x: rect.right - INSET, y: rect.top + INSET },
        { x: rect.right - INSET, y: rect.bottom - INSET },
        { x: rect.left + INSET, y: rect.bottom - INSET },
      ];
      angle.current = 0; // brackets sit axis-aligned on the target
      mode.current = "hover";
      target.addEventListener("mouseleave", leave);
    };

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onOver = (e) => {
      const target = e.target.closest?.(TARGET_SELECTOR);
      if (target && target !== activeTarget.current) enter(target);
    };
    const onScroll = () => {
      // Page scrolled under a hovering cursor: leave if the mouse left the target
      if (mode.current !== "hover" || !activeTarget.current) return;
      const el = document.elementFromPoint(mouseX.get(), mouseY.get());
      if (!el || !activeTarget.current.contains(el)) leave();
    };
    const onDown = () => animate(dotScale, 0.75, { duration: 0.15 });
    const onUp = () => animate(dotScale, 1, { duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (activeTarget.current) {
        activeTarget.current.removeEventListener("mouseleave", leave);
      }
      document.body.style.cursor = "";
    };
  }, [mouseX, mouseY, dotScale]);

  if (IS_MOBILE) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0"
        style={{
          x: cursorX,
          y: cursorY,
          scale: dotScale,
          marginLeft: -2,
          marginTop: -2,
          willChange: "transform",
        }}
      >
        <div className="w-1 h-1 rounded-full" style={{ background: "#1a1a1a" }} />
      </motion.div>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={(el) => {
            cornerEls.current[i] = el;
          }}
          className="absolute left-0 top-0"
          style={{
            marginLeft: -CORNER / 2,
            marginTop: -CORNER / 2,
            willChange: "transform",
            transform: "translate(-100px, -100px)",
          }}
        >
          <div
            className={`w-3 h-3 border-[3px] ${BRACKET_SIDES[i]}`}
            style={{ borderColor: "#1a1a1a" }}
          />
        </div>
      ))}
    </div>
  );
}

export default TargetCursor;
