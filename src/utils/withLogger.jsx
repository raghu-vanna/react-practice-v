// utils/withLogger.js
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`${WrappedComponent.name} rendered`);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger; // Ensure default export
