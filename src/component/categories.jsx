import '../style/categories.css'
const  Category= () => {
    let category=[
        {link:"All"},
        {link:"sports"},
        {link:"Disney"},
        {link:"Cartoon"},
        {link:"Web Series"},
        {link:"Comedyl"},
        {link:"Horror"},
        {link:"News"},
        {link:"Cooking"},
        {link:"Social Media"}
    ]
    return ( <div className="category">
        <ul>
{
    category.map((data)=>{
return(
    <li><a href="">{data.link}</a></li>
);
    })
}
</ul>
    </div> );
}
 
export default Category;