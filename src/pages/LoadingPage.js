import { Box } from '@mui/material'
import React from 'react'

import LoadingGif from '../images/Loading_2.gif'

export default function LoadingPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" >
      <img alt="loading" src={LoadingGif} />
    </Box>
  )
}
