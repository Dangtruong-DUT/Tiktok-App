import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from './Avatar.module.scss';
import Image from "@/components/Image";

const cx = classNames.bind(styles);

function Avatar({ image, className, altValue = "", dataSize = "32px", isLive = false }) {
    const classNames = cx('wrapper', {
        [className]: className,
        'live-avatar-border': isLive
    })

    return (
        <div
            className={classNames}
            style={{ '--size': dataSize }}
        >
            <Image className={cx('image')} src={image} alt={altValue} />
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    altValue: PropTypes.string,
    dataSize: PropTypes.string,
    isLive: PropTypes.bool
};

export default Avatar;