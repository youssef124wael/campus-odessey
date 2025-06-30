import mit from '../../resources/MIT.png';
import harvard from '../../resources/harvard.jpg';
import stanford from '../../resources/stanford.png';
import yale from '../../resources/yale.png';
import princeton from '../../resources/princeton.webp';

const images = [mit, harvard, stanford, yale, princeton];

export default function Slider(props) {
    const allImages = [...images, ...images]; // duplicate for seamless loop

    return (
        <div className="w-full h-[300px] flex justify-center items-center overflow-hidden">
            <div className="flex animate-marquee gap-4 min-w-max">
                {allImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        className="w-[200px] opacity-[70%] h-30 rounded-xl"
                        draggable={false}
                    />
                ))}
            </div>
        </div>
    );
}