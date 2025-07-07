type Props = {
  str: string;
};

export const TestComponent = ({ str }: Props) => {
  console.log(str);
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test component.</p>
    </div>
  );
};
