import React from 'react';

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
