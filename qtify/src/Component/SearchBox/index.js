import {ReactComponent as SearchIcon} from './search-icon.svg'

export default function SearchBox () {
    return(
        <form style={{
            display: "flex",
            minWidth: "570px"
        }}>
            <input 
            placeholder='search an item of your choice'
            style={{
                flex: 1,
                borderRadius: "8px 0 0 8px",
                padding: "8px"
            }}
            />
            <button style={{
                width:"66px",
                height:"48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 8px 8px 0",
                padding: "8px",
                borderLeft: "none"

            }}>
                <SearchIcon/>
            </button>
        </form>
    )
}