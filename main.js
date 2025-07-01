const colorThief = new ColorThief();
const video = document.querySelector("video");
const container = document.querySelector(".container");

// Create a canvas to capture video frames in memory
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

let animationFrameId = null;
let currentAnimation;


// Apply ambilight effect by animating the CSS variable with Motion
function applyAmbilightEffect(dominantColor) {
  if (!dominantColor) return;

  // Stop any ongoing animation to start a new one
  if (currentAnimation) {
    currentAnimation.stop();
  }

  const nextColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
  
  // et the previous color from the CSS variable. Fallback to 'transparent' if it's not set.
  const prevColor = container.style.getPropertyValue('--ambilight-color').trim() || 'transparent';

  // Animate from the previous color to the next color.
  currentAnimation = Motion.animate(
    container,
    { '--ambilight-color': [prevColor, nextColor] },
    {
      duration: 1.5,
      ease: "ease-in-out",
    }
  );
}

// Analyze a single video frame and trigger the animation
function analyzeCurrentFrame() {
  if (video.videoWidth === 0 || video.videoHeight === 0) return;

  if (
    canvas.width !== video.videoWidth ||
    canvas.height !== video.videoHeight
  ) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  }

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  try {
    const dominantColor = colorThief.getColor(canvas);
    applyAmbilightEffect(dominantColor);
  } catch (error) {
    console.error("Error analyzing frame:", error);
  }
}

// The main loop for continuous analysis, throttled for performance
let lastAnalysisTime = 0;
const analysisInterval = 400; // Analyze color every 400ms

function analysisLoop() {
  if (video.paused || video.ended) {
    animationFrameId = null; // Stop the loop
    return;
  }

  const now = Date.now();
  if (now - lastAnalysisTime >= analysisInterval) {
    lastAnalysisTime = now;
    analyzeCurrentFrame();
  }

  animationFrameId = requestAnimationFrame(analysisLoop);
}

// Event Listeners for Video State

video.addEventListener("play", () => {
  if (!animationFrameId) {
    analysisLoop();
  }
});

video.addEventListener("pause", () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (currentAnimation) {
    currentAnimation.stop();
  }
});

video.addEventListener("seeked", () => {
  if (!video.paused) {
    analyzeCurrentFrame();
  }
});

video.addEventListener("loadeddata", () => {
  analyzeCurrentFrame();
});

// Initial State

if (!video.paused && !animationFrameId) {
  analysisLoop();
} else if (video.readyState >= 2) {
  analyzeCurrentFrame();
}

// Optional: Export the frame colors for further use
window.getVideoFrameColors = function () {
  return window.videoFrameColors || [];
};
