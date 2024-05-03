import React from "react";

type Props = {
  Title: string;
};
const component: React.FC<Props> = ({ Title }) => {
  const [state, setState] = useState<boolean>(true);

  return (
    <div>
      <h1>{Title}</h1>
    </div>
  );
};

export default component;

// * type RFC to create a functional component(new extention)
// ! type rafce to create a react arrow function component(new extension)
