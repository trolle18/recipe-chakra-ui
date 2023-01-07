import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { typography } from "./foundations/typography";
import * as allComponents from "./components";
import { breakpoints } from "./foundations/breakpoints";
import { styles } from "./styles";

const theme = extendTheme ({
  ...styles,
  ...colors,
  ...typography,
  ...breakpoints,
  components: { ...allComponents  },
  // config: { cssVarPrefix: "my-theme" },
})

export default theme