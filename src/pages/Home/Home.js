import { useCallback, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { RecommendVideo } from "../Components/RecommendVideo";
import { NavigatorVideo } from "@/pages/Components/NavigatorVideo";
import videos from "@/assets/videos";

const cx = classNames.bind(styles);

const dataVideos = [
    {
        id: 1,
        title: 'Thủ tục trc khi tẩy trang của chị em =)) ',
        author: 'behocbong',
        postedDate: '2024-11-17',
        likes: 274,
        Comments: 8,
        save: 10,
        share: 5,
        data: videos.video1
    },
    {
        id: 2,
        title: 'Tín hiệu đi chụp áo dài 🧧 ',
        author: 'thanhngoc.tn76',
        postedDate: '6d ago',
        likes: 194,
        Comments: 3,
        save: 2,
        share: 5,
        data: videos.video2
    },
    {
        id: 3,
        title: 'Ughhhh',
        author: 'behocbong',
        postedDate: '2024-12-14',
        likes: 7190,
        Comments: 35,
        save: 231,
        share: 114,
        data: videos.video3
    },
    {
        id: 4,
        title: 'Ughhhh',
        author: '#CapCut   rau dắt răng không thể lấy ra',
        postedDate: '2024-12-13',
        likes: 125000,
        Comments: 57,
        save: 622,
        share: 117,
        data: videos.video4
    }
];

function Home() {
    const [indexVideo, setIndexVideo] = useState(0);
    const videoContainerRef = useRef(null);
    const videoRefs = useRef([]);

    const handleScroll = useCallback((e) => {
        if (e.deltaY > 0) {
            setIndexVideo((prev) => Math.min(prev + 1, dataVideos.length - 1));
        } else {
            setIndexVideo((prev) => Math.max(prev - 1, 0));
        }
    }, []);

    const handleChangePrevVideo = useCallback(() => {
        setIndexVideo((prev) => Math.max(prev - 1, 0));
        videoRefs.current[indexVideo - 1]?.scrollIntoView({ behavior: 'smooth' });
    }, [indexVideo]);

    const handleChangeNextVideo = useCallback(() => {
        setIndexVideo((prev) => Math.min(prev + 1, dataVideos.length - 1));
        videoRefs.current[indexVideo + 1]?.scrollIntoView({ behavior: 'smooth' });
    }, [indexVideo]);

    return (
        <div className={cx('wrapper')} ref={videoContainerRef} onWheel={handleScroll}>
            <RecommendVideo videos={dataVideos} videoRefs={videoRefs} />
            <NavigatorVideo
                index={indexVideo}
                handleClickPrevBtn={handleChangePrevVideo}
                handleClickNextBtn={handleChangeNextVideo}
            />
        </div>
    );
}

export default Home;
