import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import { colors } from "./foundations/colors";
import { typography } from "./foundations/typography";
import * as allComponents from "./components";

const theme = extendTheme ({
  ...styles,
  ...colors,
  ...typography,
  components: { ...allComponents  },
  // config: { cssVarPrefix: "my-theme" },
})

export default theme