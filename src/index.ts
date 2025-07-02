import ColorThief from 'colorthief';
import { animate, Easing } from "motion";
import { analyzeCurrentFrame } from './functions/analyzeCurrentFrame';
import { analysisLoop } from './functions/analysisLoop';
import { AmbilightState } from './types';

export function initAmbilight(videoSelector: string, containerSelector: string, analysisInterval: number = 400, variableName: string = "--ambilight-color", animationDuration: number = 1.5, animationEase: Easing | Easing[] = "easeInOut") {
    const video = document.querySelector<HTMLVideoElement>(videoSelector);
    const container = document.querySelector<HTMLElement>(containerSelector);

    // If the video or container element is not found, return
    if (!video || !container) {
        console.error("Video or container element not found");
        return;
    }

    // Create a canvas to capture video frames in memory
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    // If the canvas context is not available, return
    if (!ctx) {
        console.error("Canvas context not available");
        return;
    }

    // Create the state object
    const state: AmbilightState = {
        video,
        container,
        canvas,
        ctx,
        colorThief: new ColorThief(),
        animationFrameId: null,
        currentAnimation: animate(container, { [variableName]: "rgba(255, 255, 255, 0)" }, { duration: animationDuration }),
        lastAnalysisTime: 0,
        analysisInterval: analysisInterval,
        variableName: variableName,
        animationDuration: animationDuration,
        animationEase: animationEase as Easing | Easing[],
    };

    // Event Listeners for Video State
    // If the video is playing, start the analysis loop
    video.addEventListener("play", () => {
        if (!state.animationFrameId) {
            analysisLoop(state);
        }
    });

    // If the video is paused, stop the analysis loop
    video.addEventListener("pause", () => {
        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
            state.animationFrameId = null;
        }
        if (state.currentAnimation) {
            state.currentAnimation.stop();
        }
    });

    // If the video is seeked, analyze the current frame
    video.addEventListener("seeked", () => {
        if (!video.paused) {
            analyzeCurrentFrame(state);
        }
    });

    // If the video is loaded, analyze the current frame
    video.addEventListener("loadeddata", () => {
        analyzeCurrentFrame(state);
    });

    // If the video is not paused and the analysis loop is not running, start the analysis loop
    if (!video.paused && !state.animationFrameId) {
        analysisLoop(state);
    } else if (video.readyState >= 2) {
        // If the video is loaded, analyze the current frame
        analyzeCurrentFrame(state);
    }
} 