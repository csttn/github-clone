import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard';



const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"csttn"}
            name={'Cleyton Santana'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/43582741?v=4'}
            followers={10}
            following={8}
            company={'CertiSign'}
            location={'São Paulo, Brasil'}
            email={'csttn.dev@gmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>

          <Repos>
            <h2>RAndom Repo</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => {
                <RepoCard 
                key={n}
                username={'csttn'}
                reponame={'repository name'}
                description={'description'}
                language={'language'}
                stars={3}
                forks={3}
                />
              })}
            </div>
          </Repos>


        </RightSide>
      </Main>
    </Container>

  );
}

export default Profile;