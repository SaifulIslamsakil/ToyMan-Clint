import SectionHadding from "../../Shyerd/SectionHadding/SectionHadding";

const FrequentlyQuestions = () => {
    return (
        <div className=" w-11/12 mx-auto space-y-20">
            <SectionHadding
                hadding={"Frequently Questions"}
                subHadding={"Find your answer from here"}
            ></SectionHadding>
            <div className=" flex  gap-5">
                
                <div >
                    <img className=" mx-auto" src="https://i.ibb.co/QcHz2yn/toys-party.webp" alt="" />
                </div>
                <div className=" w-1/2">
                    <div className="collapse collapse-plus border-b-2  ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-b-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-b-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-b-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-b-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-b-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default FrequentlyQuestions;