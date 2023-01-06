// import { Styles } from "@chakra-ui/theme-tools"
// import { colors } from "./foundations/colors"
import { textSpecs, typography } from "./foundations/typography"


const styles = {

  styles: {
    global: {
      html: {
        height: "100%",       
        color: 'black',
        fontSize: textSpecs.base.fontSize,
        fontFamily: "Helvetica, sans-serif",
      },

      body: {
        minHeight: "100%",
        bg: 'white',
      },
      
      p: textSpecs.base,
      h1: textSpecs.h1,
      h2: textSpecs.h2,
      h3: textSpecs.h3,
      h4: textSpecs.h4,
      h5: textSpecs.h5,
      "b, strong": { fontWeight: typography.fontWeights.black },
    }
  }
};

export default styles