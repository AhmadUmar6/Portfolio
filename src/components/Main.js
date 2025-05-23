import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'; 
import Tile from './Tile'; 
import './Main.css'; 

const Main = () => { 
const tilesData = [ 
{ 
title: "Champions Trophy Predictor", 
subtitle: "Fantasy Game", 
date: "Feb 2025", 
media: ["ctp1.jpg", "ctp2.jpg", "ctp3.jpg"], 
link: "/projects/ChampionsTrophyPredictor" 
}, 
{ 
title: "Serenity Now", 
subtitle: "Mental Health Support App", 
date: "May 2025", 
media: ["sn1.jpg", "sn2.jpg", "sn3.jpg", 'sn4.jpg'], 
link: "/projects/serenity-now" 
}, 
{ 
title: "CMT Advocates", 
subtitle: "Law Firm Website", 
date: "July 2024", 
media: ["cmt1.jpg", "cmt2.jpg"], 
link: "/projects/CMTAdvocates" 
}, 
{ 
title: "ÉCLAT", 
subtitle: "Online Jewellery Store", 
date: "Jan 2025", 
media: ["eclat1.jpg", "eclat2.jpg", "eclat3.jpg"], 
link: "/projects/eclat-ecommerce" 
}, 
{ 
title: "Field Finder", 
subtitle: "Sports Ground Marketplace", 
date: "May 2023", 
media: ["FF1.png", "FF2.png", "FF3.png", "FF4.png"], 
link: "/projects/fieldfinder" 
}, 
{ 
title: "Dream Team", 
subtitle: "Pakistan's First Fantasy Sports App (concept)", 
date: "June 2023", 
media: ["DT1.png", "DT2.png"], 
link: "/projects/dreamteam" 
}, 
{ 
title: "Chronos App", 
subtitle: "University Course Scheduler", 
date: "July 2023", 
media: ["C1.png", "C2.png", "C3.png"], 
link: "/projects/chronos-scheduler" 
}, 
{ 
title: "Pantry App", 
subtitle: "Inventory Management System and AI Recipe Suggestions", 
date: "August 2024", 
media: ["P4.png", "P3.png", "P2.png", "P1.png"], 
link: "/projects/pantry-app" 
} 
]; 

return ( 
<Container fluid className="main-content"> 
<Row> 
<Col xs={12}> 
<div className="header-text"> 
<p>Hello there, خوش امدید! <sup>/khush aam-theeth/</sup></p> 
<div className="japanese-card">
<div className="star-icon">★</div>
<div className="japanese-text">整天睁通忙,还不挣钱</div>
<div className="english-text">Whole day I'm f*cking busy<br />only get few money</div>
</div>
</div> 
<hr className="separator" /> 
<p className="header-text2">CRAFT</p> 
</Col> 
{tilesData.map((tile, index) => ( 
<Col xs={12} md={6} lg={4} key={index}> 
<Tile
title={tile.title}
subtitle={tile.subtitle}
date={tile.date}
media={tile.media}
link={tile.link} 
/> 
</Col> 
))} 
</Row> 
</Container> 
); 
}; 

export default Main;