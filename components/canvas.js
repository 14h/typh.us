import React, {useRef, useEffect, useState} from 'react'

// https://jsart.co/150/drawing-mandala-with-js-canvas/
// https://gist.github.com/kodi/d927e20e2462805b35042de25fd52cff

const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
};

export const Canvas = props => {

    const canvasRef = useRef(null);
    const windowSize = useWindowSize();

    const draw = (ctx, frameCount) => {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const center = {
            x: width / 2,
            y: height / 2,
        };
        const radius = (width / 2) + 180;
        const lineColorTransparent = '#000000'
        const slices = 70 ;
        let _angle = 360 / slices;
        let _start = 0;

        const getPointOnCircle = function (deg, center, radius) {
            const rad = ((deg + frameCount) * Math.PI/90);

            return {
                x: center.x + radius * Math.cos(rad),
                y: center.y + radius * Math.sin(rad),
            };
        }

        const lineStroke = (start, end, width, color) => {
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.bezierCurveTo(end.x, end.y, (Math.random() * 10 * end.y), (Math.random() * 10 * end.x), (Math.random() * 10 * end.y), (Math.random() * 100 * end.x));
            ctx.stroke();

        }

        ctx.strokeStyle = lineColorTransparent;
        ctx.beginPath();

        for(let i = 0; i < slices; i++ ) {
            lineStroke(
                center,
                getPointOnCircle(_start, center, radius),
                1,
                lineColorTransparent,
            );

            _start += _angle;
        }

    }

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        //Our draw came here
        const render = () => {
            if (frameCount > 450) {
                return;
            }
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return <canvas
        ref={canvasRef}
        width={`${windowSize?.width ?? 1920}px`}
        height={`${windowSize?.height ?? 1440}px`}
        {...props}
    />;
}
