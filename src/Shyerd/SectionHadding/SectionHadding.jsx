
const SectionHadding = ({hadding, subHadding}) => {
    return (
        <div className=" text-center space-y-2">
                <h3 className=" text-5xl font-semibold">{hadding}</h3>
                <p className=" text-cyan-400">{subHadding}</p>
            </div>
    );
};

export default SectionHadding;