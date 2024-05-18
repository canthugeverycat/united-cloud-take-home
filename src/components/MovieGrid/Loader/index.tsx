import './index.scss';

const Loader = (): React.ReactElement => {
    const delay = 0.2;
    const cards = [...Array(10).keys()];

    return (
        <div className="grid">
            <div className="grid-scroll">
                {cards.map((i) => (
                    <div key={i} className="loader-card" style={{ animationDelay: `${i * delay}s` }}>
                        <div className="loader-card-glow" style={{ animationDelay: `${i * delay}s` }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loader;