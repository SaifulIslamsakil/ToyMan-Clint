
const SectionHadding = ({hadding, subHadding}) => {
    return (
        <div className=" text-center space-y-2 max-w-lg mx-auto">
                <h3 className=" text-4xl font-semibold">{hadding}</h3>
                <p className=" text-cyan-400 text-xl">{subHadding}</p>
            </div>
    );
};

export default SectionHadding;