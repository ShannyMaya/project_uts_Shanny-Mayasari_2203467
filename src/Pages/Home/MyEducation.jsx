import data from "../../data/index.json";

export default function MyEducation(){
    return(
        <section className="education--section" id="myEducation">
            <div className="portofolio--container">
                <p className="section--title">My Education</p>
                <h2 className="education--section--heading">
                    My Educational Journey</h2>
            </div>
            <div className="education--section--container">
                {data?.education?.map((item, index) => (
                    <div key={index} className="education--section--card">
                        <div className="education--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="education--section--card--content">
                            <h3 className="education--section--title">{item.title}</h3>
                            <p className="education--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}