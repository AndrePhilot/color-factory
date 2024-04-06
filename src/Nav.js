import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Nav({ colors }) {
    return (
        <>
            <h1>Please select a color.</h1>
            {colors.length !== 0 ? 
                colors.map(color => <p key={uuid()}><Link to={`/colors/${color.name}`}>{color.name}</Link></p>)
                : <p>No colors have been added yet.</p>}
        </>
    )
}

export default Nav;