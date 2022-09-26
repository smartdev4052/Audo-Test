import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useFetch from "../api/useFetch";
import { POKEMON_URL } from "../constants";
import { useEffect, useState } from "react";

const ImageDetail = () => {
    const params = useParams();
    const [id, setId] = useState(params.id);
    useEffect(() => {
    }, [id])
    const data = useFetch(`${POKEMON_URL}/${id}`);
    if(!data) {
        return (
            <div>
                Loading ...
            </div>
        );
    }
    let keySkills = Object.keys(data.skills);
    return (
        <div>
            <div className="detail-image">
                <ArrowBackIcon onClick={() => setId((id) => Math.max(id-1, 0))} />
                <img src={data.picture} />
                <ArrowForwardIcon onClick={() => setId(id => id+1)} />
            </div>
            <div style={{textAlign: 'left'}}>
                <p>English Name - {data.ename}</p>
                <p>Chinese Name - {data.cname}</p>
                <p>Japanese Name - {data.jname}</p>
                <p>Image ID - {data.id}</p>
                <p>Skills</p>
                <ul>
                    {keySkills.map((key) => (
                        <li key={key}>{key}:{data.skills[key].join(', ')}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ImageDetail;