import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
 
function ColorDetails({ colors }) {
    const params = useParams();
    const navigate = useNavigate();
    const color = colors.find(color => color.name === params.color);

    useEffect(() => {
        if (!color) {
            navigate("/colors");
        }
    }, []);

    if (!color) {
        return null;
    }

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div style={{ backgroundColor: color.value }}>
            <h1>
                THIS IS {color.name.toUpperCase()}.<br />
                ISN'T IT BEAUTIFUL?<br />
            </h1>
            <Link onClick={handleClick}>GO BACK</Link>
        </div>
    )
}

export default ColorDetails;