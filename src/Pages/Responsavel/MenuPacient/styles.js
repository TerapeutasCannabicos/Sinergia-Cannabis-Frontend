import styled from 'styled-components';

export const ProfileBg = styled.div`
  max-width: 1280px;
  min-height: 700px;
  margin: 50px auto;
  padding-bottom: 60px;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width:1400px) {
    width:90%;
  }
`
export const InnerContainerBg = styled.div`
  width: 80%;
  min-height: 800px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
`

export const TitleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`

export const Title = styled.p`
  font-size:	48px;
  font-weight:bold;
  color:white;
  margin-top:5%;
  cursor: pointer;
  
  text-decoration: ${props=>
  {return props.active===true?'underline':'none'}};
  text-decoration-color:#789D55;
  @media(max-width:800px){
    font-size: 24px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 36px;
  }
  &&:hover{
    text-decoration:underline;
    text-decoration-color:#789D55;
  }
`

export const Return = styled.img`
    width: 90%;
    cursor:pointer;  
`

export const ArrowDiv=styled.div`
  width: 90%;
  display:flex;
  align-items:flex-start;
`

export const MenuDiv=styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`

export const MenuTitle=styled.p`
  font-size: 24px;
  
  cursor: pointer;
  font-weight: bold;
  text-decoration: ${props=>
  {return props.active===true?'underline':'none'}};
  text-decoration-color:#789D55;
  @media(max-width:800px){
    font-size: 14px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 18px;
  }
  &&:hover{
    text-decoration:underline;
    text-decoration-color:#789D55;
  }

`

export const CheckDiv=styled.div`
  display:flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CheckTitle=styled.p`
  font-size: 16px;
`

export const Checkbox=styled.input`
  transform: scale(2);
  margin-left:20px;
`

export const ButtonDiv=styled.div`
  display:flex;
  
  align-items:center;
  

`

export const WindowTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #282828;
  margin-bottom: 5%;
  @media(max-width:600px){
    font-size:20px;
    
  }
`
export const WindowText = styled.p`
  font-size: 24px;
  color: #282828;
  margin-bottom: 5%;
  @media(max-width:600px){
    font-size:14px;
    
  }
`

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
