import { BsFillMouseFill } from 'react-icons/bs';

import './index.scss';

const arrowKeyTypes = ['left', 'up', 'down', 'right'];

/**
 * A component which displays a CSS icon of the physical key
 * @param {string} type A type of key
 * @returns {React.ReactElement}
 */
const Key = ({ type }: { type: string }): React.ReactElement => {
    const typeClass = `key-${type}`;

    return (
        <div
            className={`key ${typeClass}`}
            role="presentation"
            aria-label={typeClass}
        >
            <div className="key-symbol" />
        </div>
    );
};

/**
 * Header component that displays control information
 * @returns {React.ReactElement}
 */
const Header = (): React.ReactElement => (
    <div className="header">
        Use
        <div className="keys-container">
            {arrowKeyTypes.map(type => <Key key={type} {...{ type }} />)}
        </div>
        to navigate and
        <Key type="enter" />
        to favorite a movie. Or just use your
        <BsFillMouseFill size={14} color="#B4B4B4" />
        .
    </div>
);

export default Header;