import PropTypes from "prop-types";
import { memo, useRef, useEffect, useState, useCallback } from "react";
import classNames from "classnames/bind";
import styles from './Video.module.scss';
import { ProgressBar } from "./ProgressBar";
import { PauseIcon, PlayIcon } from "../Icons";
import VolumeBar from "./VolumeBar/VolumeBar";
import { VideoDescription } from "./Description";

const cx = classNames.bind(styles);

function VideoPlayer({ sources = [], className }) {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showPlayPauseIcon, setShowPlayPauseIcon] = useState(false);

    useEffect(() => {


        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInViewport(true);
                    if (videoRef.current) {
                        videoRef.current.play().catch((error) => {
                            console.error("Error attempting to play video:", error);
                        });
                    }
                } else {
                    setIsInViewport(false);
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            } else {
                if (isInViewport && videoRef.current) {
                    videoRef.current.play().catch((error) => {
                        console.error("Error attempting to play video:", error);
                    });
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [isInViewport]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        const updateTime = () => {
            setCurrentTime(video.currentTime);
        };

        const updateDuration = () => {
            setDuration(video.duration);
        };

        video.addEventListener("timeupdate", updateTime);
        video.addEventListener("loadedmetadata", updateDuration);

        return () => {
            video.removeEventListener("timeupdate", updateTime);
            video.removeEventListener("loadedmetadata", updateDuration);
        };
    }, []);

    const handlePlayPause = (event) => {

        if (event.target !== videoRef.current) {
            return;
        }
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch((error) => {
                    console.error("Error attempting to play video:", error);
                });
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
            setShowPlayPauseIcon(true);
            setTimeout(() => {
                setShowPlayPauseIcon(false);
            }, 500);
        }
    };

    const handleSeek = useCallback((time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    }, []);


    const handleMuteToggle = useCallback((newMutedState) => {
        setIsMuted(newMutedState);
        if (videoRef.current) {
            videoRef.current.muted = newMutedState;

        }
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            if (videoRef.current.muted !== isMuted) {
                console.log('muted', videoRef.current.muted);
                videoRef.current.muted = isMuted;
            }
        }
    }, [volume, isMuted]);

    const handleVolumeChange = useCallback((newVolume) => {
        setVolume(newVolume);
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    }, [])


    if (!Array.isArray(sources)) {
        sources = [sources];
    }

    return (
        <section
            className={cx('video-frame', {
                [className]: className
            })}
        >
            <div className={cx('videoControls-top')}>
                <VolumeBar
                    className={cx('icons')}
                    volume={volume}
                    onVolumeChange={handleVolumeChange}
                    isMuted={isMuted}
                    onMuteToggle={handleMuteToggle}
                />
            </div>
            {showPlayPauseIcon && (
                <div className={cx('play-pause-icon')}>
                    {!isPlaying ?
                        <PauseIcon width="1em" height="1em" />
                        :
                        <PlayIcon width="1em" height="1em" />
                    }
                </div>
            )}
            <video
                onClick={handlePlayPause}
                className={cx('video-frame__video')}
                ref={videoRef}
                playsInline
                loop
                muted={isMuted}
            >
                {sources.map((source, index) => (
                    <source key={index} src={source.data} type={source.type} />
                ))}
                Your browser does not support the video tag.
            </video>
            <div className={cx('videoControls-bottom')}
                onClick={handlePlayPause}
            >
                <div className={cx('video-multiText')}>
                    <a href={`@${sources[0].author}`} className={cx('video-author-container')}>
                        <h3 className={cx('video-author')}>{sources[0].author}</h3>
                        {sources[0].postedDate}
                    </a>
                    <VideoDescription description={sources[0].title} />
                </div>
                <ProgressBar
                    className={cx('progress')}
                    currentTime={currentTime}
                    duration={duration}
                    onSeek={handleSeek}
                />
            </div>
        </section>
    );
}

VideoPlayer.propTypes = {
    sources: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
};

export default memo(VideoPlayer);