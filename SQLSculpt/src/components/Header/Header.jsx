import { Heading } from "@innovaccer/design-system";
import { projectName } from "../../constants";
import "./styles.css";

const Header = () => {
  return (
    <Heading className="nav" size="xl" data-test="heading" color="white">
      {projectName}
    </Heading>
  );
};

export default Header;
