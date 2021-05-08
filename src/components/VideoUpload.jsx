import React, { useEffect, useState } from 'react'
import { Grommet, Box, Text } from 'grommet'
import ReactPlayer from 'react-player'
import { grommet } from 'grommet/themes'

import styled from 'styled-components';

const GrommetContainer = styled.div`
  overflow: auto,
  padding: 0%, 
  margin: 0%
`;


const VideoUpload = props => {

    //Defining the state
    const [percentage, setPercentage] = useState(0)
    const [list, setList] = useState(null)

    useEffect(() => {
        let array = []

        for (let i = 0; i < props.videoList.length; i++) {
            array.push(props.videoList[i].src)
        }

        setList(array)

        setPercentage(Math.floor(Math.random() * 100))
        
        
    }, [props.videoList])  

    console.log(props.videoList);
    console.log(percentage);
  
    return (
            <GrommetContainer>
            <Grommet full theme={grommet}>
                <Box fill align="center" justify="center" >
                    <ReactPlayer
                        url={list}
                        playing
                        width='auto'
                        height={percentage + '%'}
                        controls={true}
                        style={{maxWidth: '100%', maxHeight: '100%', display:'flex', justifyContent:'center'}}
                    />       
                    <Box key={7} margin="small">

                        <Text size={10}>{`Size: ${percentage} %`}</Text>

                    </Box>
                </Box>
            </Grommet>
            </GrommetContainer>
        )
}

export default VideoUpload