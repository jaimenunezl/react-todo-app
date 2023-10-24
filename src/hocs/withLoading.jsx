import { Spinner } from '../components';

export function withLoading(WrappedComponent) {
  return function WrapperComponentWithLoading(props) {
    return <WrappedComponent {...props} onLoading={() => <Spinner />} />;
  };
}
