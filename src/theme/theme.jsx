import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import { colors } from "./foundations/colors";
import { typography } from "./foundations/typography";
import * as allComponents from "./components";
import { breakpoints } from "./foundations/breakpoints";

const theme = extendTheme ({
  ...styles,
  ...colors,
  ...typography,
  ...breakpoints,
  components: { ...allComponents  },
  // config: { cssVarPrefix: "my-theme" },
})

export default theme