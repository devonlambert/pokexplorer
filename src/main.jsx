import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@chakra-ui/pro-theme'
import { extendTheme } from '@chakra-ui/react'

const proTheme = extendTheme(theme)
const extension = {
  colors: { ...proTheme.colors, brand: proTheme.colors.blue },
}
const myTheme = extendTheme(extension, proTheme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
