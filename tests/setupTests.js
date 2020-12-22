import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-styled-components";

configure({ adapter: new Adapter() });
