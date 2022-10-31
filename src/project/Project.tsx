import './Project.css';

export interface ProjectProps {
    name: string,
    description: string,
    backgroundImage: string | null,
    links: { link: string, img: string }[]
}

export default function Project(props: ProjectProps) {
    return (
        <div className='project' style={(props.backgroundImage != null) ? { backgroundImage: `url(${props.backgroundImage})` } : { backgroundColor: '#19193b' }}>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div className='links'>
                {
                    props.links.map((link, i) => 
                        <a href={link.link} target='_blank' rel='noreferrer' key={`${props.name}-links-${i}`}><img src={link.img} alt="" /></a>
                    )
                }
            </div>
        </div>
    );
}