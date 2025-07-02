import { analyzeCurrentFrame } from "./analyzeCurrentFrame";
import { AmbilightState } from "../types";

export function analysisLoop(state: AmbilightState) {
    const { video, analysisInterval } = state;

    if (video.paused || video.ended) {
        state.animationFrameId = null; // Stop the loop
        return;
    }

    const now = Date.now();

    // Analyze color every 400ms
    if (now - state.lastAnalysisTime >= analysisInterval) {
        state.lastAnalysisTime = now;
        analyzeCurrentFrame(state);
    }

    // Continue the loop
    state.animationFrameId = requestAnimationFrame(() => analysisLoop(state));
}