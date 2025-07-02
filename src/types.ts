import ColorThief from "colorthief";
import { animate, Easing } from "motion";

export interface AmbilightState {
    video: HTMLVideoElement;
    container: HTMLElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    colorThief: ColorThief;
    animationFrameId: number | null;
    currentAnimation: ReturnType<typeof animate>;
    lastAnalysisTime: number;
    analysisInterval: number;
    variableName: string;
    animationDuration: number;
    animationEase: Easing | Easing[];
} 