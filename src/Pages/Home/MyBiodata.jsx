import data from "../../data/index.json";

export default function MyBiodata(){
    return(
        <section className="biodata--section" id="myBiodata">
            <div className="portofolio--container">
                <p className="section--title">My Biodata</p>
                <h2 className="biodata--section--heading">
                    My Identities</h2>
            </div>
            <div className="biodata--section--container">
                {data?.biodata?.map((item, index) => (
                    <div key={index} className="biodata--section--card">
                        <div className="biodata--section--img">
                            <img src={item.src} alt="Product Chain"/>
                        </div>
                        <div className="biodata--section--card--content">
                            <h3 className="biodata--section--title">{item.title}</h3>
                            <p className="biodata--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}