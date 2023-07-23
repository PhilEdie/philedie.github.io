/* eslint-disable jsx-a11y/alt-text */
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import '../styles/style.css'


interface Repository {
  created_at : string
}


const ProjectPage = () => {
     
    const [repos, setRepos] = useState<any>([]);
    const [images, setImages] = useState <Map<string, string>>(); // Repo name to image url

    useEffect(() => {
      fetch('https://api.github.com/users/philedie/repos')
        .then(response => response.json())
        .then(data => {
          const sortedRepos = data.sort((a:Repository, b: Repository) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
          sortedRepos.reverse()
          setRepos(sortedRepos);
        });
    }, []);
    
      useEffect(() => {
        Promise.all(
          repos.map((repo: { owner: { login: any; }; name: any; }) =>
            fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents`)
              .then(response => response.json())
              .then(data => {
                const imageFile = data.find((file: { type: string; name: string; }) => file.type === 'file' && file.name.startsWith('DisplayImage'));
                return [repo.name, imageFile ? imageFile.download_url : null];
              })
          )
        ).then(images => setImages(new Map(images)));
      }, [repos]);


      if (repos != null && images != null) {
        return(
            <>
            {repos.map((repo : any) => (
              <div>
              <div key={repo.id} className="project">
                <h2 className="project--title">{repo.name}</h2>
                <div className="project-content">
                  <div className='project--text'>
                    <p>{repo.description}</p>
                    <a href={repo.html_url}>View Repository</a>
                  
                </div>
                {images.get(repo.name) && 
                  <img src={images.get(repo.name)} className='project--image'/>
                }
                </div>
              </div>
              </div> 
            ))}
            </>
        );
    }
    return null;
}

export default ProjectPage;



