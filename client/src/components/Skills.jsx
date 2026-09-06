import axios from 'axios';
import { useEffect, useState } from 'react';

function Skills() {
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/skills');
            setArray(response.data); // response.data is already the array
            console.log(response.data);
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed to load skills.</p>;

    return (
        <>
            <section id="skills">
                {array.map((skill) => (
                    <p key={skill.id}>{skill.name} — {skill.level}</p>
                ))}
            </section>
        </>
    )
}
export default Skills;