import mit from '../../resources/Mit.svg';
import harvard from '../../resources/Harvard.svg';
import stanford from '../../resources/Stanford.svg';
import yale from '../../resources/Yale.svg';
import princeton from '../../resources/Princeton.svg';
import caltech from '../../resources/Caltech.svg';
import ContainerLayout from '../../layout/ContainerLayout';

const images = [mit, harvard, stanford, yale, princeton, caltech];

export default function Slider(props) {
    const allImages = [...images];

    return (
        <div className="w-full flex justify-center items-center h-[200px] max-md:h-[100px] bg-blue-700">
            <ContainerLayout>
                <div className="flex justify-center sm:gap-4 md:gap-4">
                    {allImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`slide-${index}`}
                            className="w-[200px] h-[60px] max-lg:w-[80px] max-md:w-[50px] max-md:h-[30px]"
                            draggable={false}
                        />
                    ))}
                </div>
            </ContainerLayout>
        </div>
    );
}