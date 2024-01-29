import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is description of the food delivery website.</h2>
      <User />
      <UserClass
        name={"Priyansh"}
        location={"Dehradun"}
        contact={"9007764055"}
      />
    </div>
  );
};

export default About;
