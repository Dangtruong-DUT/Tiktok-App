function HeartBrokenIcon({ className, width = '1em', height = '1em', color = 'currentColor', rotate = '0deg' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: `rotate(${rotate})` }} width={width} height={height} fill={color}>
            <path d="M26.56 6.47a21.7 21.7 0 0 1 2.81 3.01 8.77 8.77 0 0 1 5.84-.8c1.3.27 3.67 
            1.5 5.23 3.81 1.48 2.18 2.35 5.48.55 10.18-1.4 3.68-4.6 7.43-8.2 10.64a55 55 0 0 1-8.79
            6.4 55 55 0 0 1-8.79-6.4c-3.6-3.21-6.8-6.96-8.2-10.64-1.8-4.7-.93-8 .55-10.18a9.35 9.35 0 0 1
            5.23-3.8c2.96-.6 5.31.33 7 1.48.73.49 1.39 1.06 1.99 1.7l-2.6 8.92a1 1 0 0 0 .44 1.1l4 2.52-1.38 
            4.51a.65.65 0 0 0 1.18.55l3.83-5.98a.53.53 0 0 0-.1-.7l-3.8-3.2 2.84-8.54s-1.9-2.66-4.15-4.19A12.97 
            12.97 0 0 0 12 4.76c-2.31.47-5.59 2.3-7.75 5.49-2.26 3.32-3.21 7.99-.98 13.85 1.75 4.57 5.5 8.83 9.28 12.2a56.6
            56.6 0 0 0 10.52 7.47l.93.49.93-.49a56.6 56.6 0 0 0 10.52-7.47c3.78-3.37 7.53-7.63 9.28-12.2 2.23-5.86 
            1.28-10.53-.98-13.85-2.16-3.2-5.44-5.02-7.75-5.48-3.94-.8-7.16.31-9.44 1.7"></path>
        </svg>
    );
}

export default HeartBrokenIcon;