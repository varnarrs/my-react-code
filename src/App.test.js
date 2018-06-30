import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Multiselect from './Multiselect';
import { shallow, configure } from 'enzyme';  
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App | initial loading and methods with shallow', () => {
  let output;
  beforeEach(() => {
    output = shallow(<App />);
  });

  it('App | Should match snapshot to avoid sudden/unnecessary changes', () => {
    //Checking with snapshot (created on first run) to avoid any unnecessary/unintended sudden changes to UI
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('App | is Testing initial loading and it should have Multiselectbox ', () => {
    output = shallow(<App />);
    expect(output.find(Multiselect)).toHaveLength(1);
  });

  it('App | componentDidMount() ', () => {
    output = shallow(<App />);
    output.instance().componentDidMount();
  });
});
