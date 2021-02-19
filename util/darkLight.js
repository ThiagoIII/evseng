import { createMuiTheme } from '@material-ui/core/styles'

const themeLight = createMuiTheme({
    palette: {
        background: {
            default: '#ffffff'
        },
        text: {
            primary: '#2D5C80'
        }
    }
})

const themeDark = createMuiTheme({
    palette: {
        background: {
            default: '#222222'
        },
        text: {
            primary: '#ffffff'
        }
    }
})

export { themeLight, themeDark }
