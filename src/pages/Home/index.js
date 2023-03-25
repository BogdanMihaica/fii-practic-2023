import React from "react"
import { useEffect, useState } from "react"
import Cards from "../../common/components/cards"

import styled from "styled-components"

const BigWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
function renderMemes(meme) {
  console.log(meme.id, meme.url, meme.name)

  return (
    <div>
      <Wrap>
        <Cards id={meme.id} url={meme.url} name={meme.name} />
      </Wrap>
    </div>
  )
}
function Home() {
  const [memes, setMemes] = useState([])
  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const result = await response.json()
      setMemes(result?.data?.memes)
    }
    getMemes()
  }, [])
  return <BigWrap>{memes?.length !== 0 && memes?.map(renderMemes)}</BigWrap>
}

export default Home
