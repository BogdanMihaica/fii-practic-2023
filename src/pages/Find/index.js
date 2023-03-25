import React, { useState, useEffect } from "react"
import { Input } from "antd"
import debounce from "lodash.debounce"
import styled from "styled-components"
import Cards from "../../common/components/cards"
const ReturnWrap = styled.div`
  margin-top: 3.5rem;
  flex-direction: column;
  min-height: calc(100vh - 55px);
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(-45deg, rgb(50, 150, 150), rgb(50, 200, 150));
`

const InputWrap = styled.div`
  width: 400px;
`
const SearchText = styled.h1`
  font-size: 3rem;
  color: white;
`
const BigWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0;
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
function renderFilteredMemes(meme) {
  return (
    <div>
      <Wrap>
        <Cards id={meme.id} url={meme.url} name={meme.name} />
      </Wrap>
    </div>
  )
}
export default function Find() {
  const [find, setFind] = useState("")
  const [memes, setMemes] = useState([])
  const [filteredMemes, setFilteredMemes] = useState([])
  useEffect(() => {
    async function getMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes")
      const result = await response.json()

      setMemes(result?.data?.memes)
    }
    getMemes()
  }, [])
  const filterMemes = debounce((input) => {
    if (!input) return setFilteredMemes([])

    setFilteredMemes(
      memes.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
    )
  }, 500)

  return (
    <ReturnWrap>
      <SearchText>Search for a meme</SearchText>
      <InputWrap>
        <Input
          label="find"
          placeholder="Enter a specific meme name..."
          type="text"
          value={find}
          onChange={(event) => {
            setFind(event.target.value)
            filterMemes(event.target.value)
          }}
        />
      </InputWrap>
      <BigWrap>
        {filteredMemes?.length !== 0 && filteredMemes?.map(renderFilteredMemes)}
      </BigWrap>
    </ReturnWrap>
  )
}
