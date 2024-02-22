
const SectionHadding = ({hadding, subHadding}) => {
    return (
        <div className=" text-center space-y-3 max-w-lg mx-auto">
                <h3 className=" text-5xl ">{hadding}</h3>
                <p className=" text-cyan-400 ">{subHadding}</p>
            </div>
    );
};

export default SectionHadding;