// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function Skills() {
//     const [array, setArray] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchAPI = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/skills');
//             setArray(response.data);
//             console.log(response.data);
//         } catch (err) {
//             console.error(err);
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchAPI();
//     }, []);

//     if (loading) return <p>Loading skills...</p>;
//     if (error) return <p>Failed to load skills.</p>;

//     return (
//         <>
//             <section id="skills">
//                 {array.map((skill) => (
//                     <div className="skill" id={skill.id}>
//                         <h3 key={skill.id}>{skill.name}</h3>
//                         <p>Skill Level: {skill.level}</p>
//                         <p>Years of Experience: {skill.yearsOfExperience}</p>
//                     </div>
//                 ))}
//             </section>
//         </>
//     )
// }
// export default Skills;


import axios from 'axios';
import { useEffect, useState } from 'react';

function Skills() {
    const [skills, setSkills] = useState([]);
    const [category, setCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            setLoading(true);
            try {
                const url =
                    category === 'All'
                        ? 'http://localhost:8080/api/skills'
                        : `http://localhost:8080/api/skills?category=${category}`;

                const response = await axios.get(url);
                setSkills(response.data);
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, [category]); // re-fetch whenever category changes

    // Derive category list from all skills (better: fetch full list once separately)
    const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

    if (error) return <p>Failed to load skills.</p>;

    return (
        <section>
            <h2>Skills</h2>

            <div className="filter-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={category === cat ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="skills-list">
                    {skills.map((skill) => (
                        <p key={skill.id}>
                            {skill.name} -- {skill.level}
                        </p>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Skills;