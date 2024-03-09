import './HeroSection.css'

export default function HeroSection(){
    return <div className="hs-container">
        <div className="hs-content">
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div className="hs-img-frame">
                <img src='hero_headphones.png' className="hs-img" alt='Headphone'/>
            </div>          

        </div>
    </div>
}