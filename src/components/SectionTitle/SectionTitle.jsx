

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center mb-10'>
            <p className="text-yellow-500 italic mb-3">---{subHeading}---</p>
            <h3 className="text-3xl border-y-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;