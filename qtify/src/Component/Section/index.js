import './Section.css'
import Card from '../Card'
import { useState } from 'react'
import Carousel from '../Carousel'



export default function Section({title, data, navId}){
    console.log("data array", data)

    const [isCollapsed, setIsCollapsed] = useState(true)
    return (
        <div className='section'>
            <div className='section-header'>
                <h1 className='title'>{title}</h1>
                <h1 className='section-toggle-btn' 
                onClick={()=>{setIsCollapsed(!isCollapsed)}}
                >{isCollapsed? "Show All": "Collapse"}</h1>
            </div>

           {isCollapsed ? <Carousel data={data} navId={navId}/> : <div className='card-container'>          
                    {data.map(cardData => <Card
                        key={cardData.id}
                        imgSrc={cardData.image}
                        label={cardData.title}
                        followersCount={cardData.follows}

                />)}

            </div>}
        </div>
    )
}