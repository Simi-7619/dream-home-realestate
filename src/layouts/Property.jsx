
const Property = ({property}) => {
    const {image,estate_title,price,} = property
    return (
        <div>
            <img src={image} alt="Property-Image" />
            <h1>{}</h1>
        </div>
    );
};

export default Property;

