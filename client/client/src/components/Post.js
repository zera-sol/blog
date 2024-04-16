export default function Post(){
    return(
        <div className="post">
            <div className="post-image">
                <img src={require("../images/4hwflpg54ea-1024x683.jpg")} alt="blog"/>
            </div>
            <div className="post-texts">
                <h2 className="post-title">WEEKLY ARTICLES WITH INSIGHT INTO THE WEEKEND'S MESSAGE</h2>
                <p className="author"><span className="logo">Zera Sol</span> <span className="date">17-6-2002</span> <span className="time"> 4:46</span></p>
                <p className="post-detail">Newbreak Church partners with you and your family. Every week we send out an email providing helpful links to the week's content, guides for kids and students so they can follow along at home, as well as updated news and information that are important to Newbreak Church as a whole and specific to our campuses across San Diego County.</p>
            </div>

        </div>
    )
}