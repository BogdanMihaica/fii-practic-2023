import React from "react"
import styled from "styled-components"

const Image = styled.div`
  height: 300px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-color: white;
  background-repeat: no-repeat;
  margin-top: 2rem;
`

const Name = styled.div`
  font-size: 20px;
  text-align: center;
`

const Wrapper = styled.div`
  height: 100%;
  width: 400px;
  padding: 10px 0px;

  margin-bottom: 0px;
  margin-top: 0;
`
export default function Cards({ url, id, name }) {
  return (
    <div>
      <div>
        <Wrapper key={id}>
          <Image url={url}></Image>
          <Name>{name}</Name>
        </Wrapper>
      </div>
    </div>
  )
}
