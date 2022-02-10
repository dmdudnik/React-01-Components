function Section (title) {
    return ( 
    <div>
        {title && <h2>{title}</h2>}
    </div>
    );
}

export default Section;