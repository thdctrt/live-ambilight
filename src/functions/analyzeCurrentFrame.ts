import { applyAmbilightEffect } from "./applyAmbilightEffect";
import { AmbilightState } from "../types";

// Analyze a single video frame and trigger the animation
export function analyzeCurrentFrame(state: AmbilightState) {
    const { video, canvas, ctx } = state;

    try {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // If the video is not loaded, return
        if (videoWidth === 0 || videoHeight === 0 || isNaN(videoWidth) || isNaN(videoHeight)) {
            return;
        }

        // If the canvas is not the same size as the video, resize it
        if (
            canvas.width !== videoWidth ||
            canvas.height !== videoHeight
        ) {
            canvas.width = videoWidth;
            canvas.height = videoHeight;
        }

        // Draw the video frame to the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create a new image from the canvas
        const img = new Image();
        img.src = canvas.toDataURL();
        img.onload = () => {
            try {
                // Get the dominant color of the image
                const dominantColor = state.colorThief.getColor(img);
                // Apply the ambilight effect
                applyAmbilightEffect(dominantColor, state);
            } catch (error) {
                console.error("Error in color thief after image load:", error);
            }
        };
    } catch (error) {
        console.error("Error analyzing frame:", error);
    }
}
