function PictureInPictureIcon({ className, width = '1em', height = '1em', color = 'currentColor', rotate = '0deg' }) {
    return (
        <svg font-size="21" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: `rotate(${rotate})` }} width={width} height={height} fill={color}  >
            <path d="M19.2 7h9.6c2.03 0 3.3 0 4.27.08.92.08 1.2.2 1.3.25a3 3 0 0 1 1.3 1.3c.05.1.17.38.25 1.3.08.96.08 2.24.08 4.27V20h4v-5.8c0-3.92
            0-5.88-.76-7.38a7 7 0 0 0-3.06-3.06C34.68 3 32.72 3 28.8 3h-9.6c-3.92 0-5.88 0-7.38.76a7 7 0 0 0-3.06 3.06C8 8.32 8 10.28 8 14.2v19.6c0 
            3.92 0 5.88.76 7.38a7 7 0 0 0 3.06 3.06c1.5.76 3.46.76 7.38.76h3.85c-.05-.79-.05-1.75-.05-3v-1h-3.8c-2.03 0-3.3 0-4.27-.08-.92-.08-1.2-.2-1.3-.25a3
            3 0 0 1-1.3-1.3c-.05-.1-.17-.38-.25-1.3-.08-.96-.08-2.24-.08-4.27V14.2c0-2.03 0-3.3.08-4.27.08-.92.2-1.2.25-1.3a3 3 0 0 1 1.3-1.3c.1-.05.38-.17 1.3-.25C15.89 7 17.17 7 19.2 7Z"></path>
            <path d="M27.44 26.18c-.44.86-.44 1.98-.44 4.22v9.2c0 2.24 0 3.36.44 4.22a4 4 0 0 0 1.74 1.74c.86.44 1.98.44 4.22.44h4.2c2.24 0 3.36 0 4.22-.44a4 4
            0 0 0 1.74-1.74c.44-.86.44-1.98.44-4.22v-9.2c0-2.24 0-3.36-.44-4.22a4 4 0 0 0-1.74-1.74C40.96 24 39.84 24 37.6 24h-4.2c-2.24 0-3.36 0-4.22.44a4 4 0 0 0-1.74 1.74ZM37.6 28c1.19 0 1.84
            0 2.3.04h.05v.06c.05.46.05 1.11.05 2.3v9.2c0 1.19 0 1.84-.04 2.3v.05h-.06c-.46.05-1.11.05-2.3.05h-4.2c-1.19 0-1.84 0-2.3-.04h-.05v-.06C31 41.44 31 40.8 31 39.6v-9.2c0-1.19 0-1.84.04-2.3v-.05h.06c.46-.05 
            1.11-.05 2.3-.05h4.2ZM14.83 10.67a1 1 0 0 0 0 1.42l5.78 5.77-2.29 2.3a.6.6 0 0 0 .33 1.02l7.97 1.29a.82.82 0 0 0 .93-.94l-1.29-7.96a.6.6 0 0 0-1.02-.33l-2.3 2.3-5.77-5.79a1 1 0 0 0-1.42 0l-.92.92Z"></path>
        </svg>
    );
}

export default PictureInPictureIcon;