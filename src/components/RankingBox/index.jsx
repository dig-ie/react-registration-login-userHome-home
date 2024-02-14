import { RankingBoxContainer, UserCotainer, UserImgContainer, UserImg, 
    UserSubContainer, UserNameText, LoadBarContainer, LoadBar } from './styles'

export const RankingBox = () => {

    return(
        <RankingBoxContainer>
            <UserCotainer>
                <UserImgContainer>
                    <UserImg src='https://avatars.githubusercontent.com/u/101150281?v=4'alt='profilepic'/>
                </UserImgContainer>
                <UserSubContainer>
                    <UserNameText>Usuário nome</UserNameText>
                    <LoadBarContainer>
                        <LoadBar/>
                    </LoadBarContainer>
                </UserSubContainer>
            </UserCotainer>
            
        </RankingBoxContainer>
    )
    
}