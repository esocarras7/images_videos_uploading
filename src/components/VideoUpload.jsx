import React, { useEffect, useState } from 'react'
import { Grommet, Box, Text } from 'grommet'
import ReactPlayer from 'react-player'
import { grommet } from 'grommet/themes'

import styled from 'styled-components';

const GrommetContainer = styled.div`
  overflow: visible;
  padding: 0%; 
  margin: 0%;
`;

const VideoUpload = props => {

    //Defining the state
    const [list, setList] = useState(null)

    useEffect(() => {
        let array = []
        for (let i = 0; i < props.videoList.length; i++) {
            array.push(props.videoList[i].src)
        }
        setList(array)
        
    }, [props.videoList])  
  
    return (
            <GrommetContainer>
                <Grommet full theme={grommet} >
                    <Box fill align="center" justify="center" gap='small'>
                        <ReactPlayer
                            url={list}
                            playing
                            width={props.percentage + '%'}
                            height={props.percentage + '%'}
                            controls={true}
                            style={{display:'flex', justifyContent:'center'}}
                            onPlay = {() => {
                                if(document.getElementsByTagName('video')[0]) {
                                    document.getElementsByTagName('video')[0].style.width = 'auto'
                                    document.getElementsByTagName('video')[0].style.height = 'auto'
                                    document.getElementsByTagName('video')[0].style.overflow = 'auto'
                                    document.getElementsByTagName('video')[0].style.marginTop = 'auto'
                                }
                            }}
                        />       
                        <Box key={7} margin="small">
                            <Text size={10}>{`Size: ${props.percentage} %`}</Text>
                        </Box>
                    </Box>
                </Grommet>
            </GrommetContainer>
        )
}

export default VideoUpload