import paid from "images/paid.png";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Link } from "react-router-dom";

export default () => {
  return (
    <AnimationRevealPage>
      <Link>
        <paid></paid>
      </Link>
    </AnimationRevealPage>
  );
};
