import { animate, Easing } from "motion";
import { AmbilightState } from "../types";

// Apply ambilight effect by animating the CSS variable with Motion
export function applyAmbilightEffect(dominantColor: [number, number, number], state: AmbilightState) {
    if (!dominantColor) return;

    let { container, currentAnimation, variableName, animationDuration, animationEase } = state;

    // If the container or current animation is not found, return
    if (!container || !currentAnimation) {
        return;
    }

    // Stop any ongoing animation to start a new one
    if (currentAnimation) {
        currentAnimation.stop();
    }

    // Convert the dominant color to an RGB string
    const nextColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

    // Get the previous color from the CSS variable. Fallback to transparent if it's not set.
    const prevColor = container.style.getPropertyValue(variableName).trim() || 'rgba(255, 255, 255, 0)';

    // TODO: own interpolate logic
    // Animate from the previous color to the next color.
    state.currentAnimation = animate(
        container,
        { [variableName]: [prevColor, nextColor] } as any,
        {
            duration: animationDuration,
            ease: animationEase as Easing | Easing[],
        }
    );
}
