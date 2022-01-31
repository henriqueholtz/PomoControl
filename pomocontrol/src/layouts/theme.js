import { createTheme } from "@material-ui/core";
import { MuiAppBar, MuiPaper, MuiSvgIcon } from './Mui-overrides'

export const theme = createTheme({
    overrides: {
        MuiAppBar,
        MuiPaper,
        MuiSvgIcon
    }
})