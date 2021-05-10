import React, { useState, useEffect } from 'react'
import { Box, Grommet, FileInput, Meter, Text } from 'grommet'
import { grommet } from 'grommet/themes'
import VideoUpload from './VideoUpload'
import styled from 'styled-components';

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  width: auto;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MeterContainer = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  width: auto;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0%;
  padding: 0%;
`;

const LoaderComponent = () => {

    //Defining the state
    const [values, setValues] = useState([])
    const [load, setLoad] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const cleanName = (rootName) => {
        let rightName = []
        for (let i = 0; i < rootName.length; i++) {
            if(rootName[i] !== '_') {
                rightName.push(rootName[i])
            }
            else {
                rightName.push(' ')
            }
        }
        return rightName
    }

    useEffect(() => {
        let time = 0
        if(values.length > 0) {
            setLoad(Math.floor(Math.random() * 100))
            time = window.setTimeout(() => {
                setLoad(100)
            }, 700)
        }
        else {
            setLoad(0)
        }
        setPercentage(Math.floor(Math.random() * 100))
        
        return () => time && window.clearTimeout(time)
        
    }, [values])

    return (
        <Grommet full theme={grommet}>
            <Box fill align="center" justify="start" pad="large">
                <InputContainer>
                    <FileInput
                        renderFile={file => (
                            <Box direction="row-responsive" gap="small" >
                                <Text weight="bold">{cleanName(file.name)}</Text>
                                <Text color="text-weak">{Math.round(file.size/1024/1024)} Mb</Text>
                            </Box>
                        )}
                        onClick={() => setLoad(0)}
                        onChange={event => {
                            const fileList = event.target.files;
                            let videoList = []
                            for (let i = 0; i < fileList.length; i += 1) {
                                const file = fileList[i];
                                videoList.push({src: URL.createObjectURL(file), type: file.type})
                            }
                            setValues(videoList)
                        }}
                    />
                </InputContainer>

                <MeterContainer>
                    <Box align="center" pad="large">
                        <Meter type="bar" value={load} color='darkorange' />
                        <Text size={10}>{`${load} %`}</Text>
                    </Box>
                </MeterContainer>

                <Box align="center" pad="large">
                    { values.length > 0 
                    ?
                        <VideoUpload videoList={values} percentage={percentage} />
                    :
                        null
                    }
                </Box>
            </Box>
        </Grommet>
    )
}

export default LoaderComponent