import './card.css'

export default function Card({
    imgSrc,
    followersCount,
    label,

}) {
    return(
        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-img-frame'>
                    <img className='card-img' src={imgSrc} alt='Images'/>
                </div>
                <div className='card-content'>
                    <span className='card-content-pill'>
                      {followersCount}  100 follows
                    </span>
                </div>

            </div>
            <p className='card-label'>{label}</p>

        </div>
    )
}