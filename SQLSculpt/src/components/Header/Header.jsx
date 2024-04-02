import { projectName } from "../../constants";
import { Heading } from "@innovaccer/design-system";
import "./styles.css";

const Header = () => {
  return (
    <Heading className="nav" size="xl" data-test="heading">
      {projectName}
    </Heading>
  );
};

export default Header;
