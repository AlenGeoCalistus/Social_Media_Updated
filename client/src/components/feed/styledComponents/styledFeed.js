import {Box, styled} from '@mui/material'

export const FeedContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    height:'100vh',
    overflow: 'auto',

}))