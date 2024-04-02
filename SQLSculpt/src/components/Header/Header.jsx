import { projectName } from "../../constants";
import { Text } from "@innovaccer/design-system";

const Header = () => {
  return (
    <Text weight="strong" size="large">
      {projectName}
    </Text>
  );
};

export default Header;
