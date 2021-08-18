import React,{useContext,useEffect,useState,useReducer} from 'react';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {InnerContainerBg, InputContainer, ProfileBg,Title, TitleContainer } from './styles';
import { Button } from '../../../Utils/styles';
import AuthContext from '../../../Storage/auth-context';

export default function ProfileData(){
  const {userInfo}=useContext(AuthContext);
  console.log(userInfo)
  return(
    <>
    <Head title="Terapeutas Cannábicos - Dados do perfil" description="Descrição do dados"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Title active={true}>DADOS</Title>
        <Link to='/perfil/calendario'><Title>CALENDÁRIO</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <Return destiny='/perfil'/>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder={userInfo.nome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled />
        </InputDiv>
        <InputDiv>
          <InputTitle>Email:</InputTitle>
          <InputReverse disabled />
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone celular:</InputTitle>
          <InputReverse disabled />
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone secundário:</InputTitle>
          <InputReverse autoComplete='off' />
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse   disabled/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse disabled/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}}/>
          </InputDiv>
        </InputContainer>
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse autoComplete='off' v/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off' />
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Nº:</InputTitle>
            <InputReverse style={{'width':'100px'}} />
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} />
          </InputDiv>
        </InputContainer>
        <Button type='submit' >SALVAR</Button>
      </InnerContainerBg>
    </ProfileBg>
    </>
  )
}