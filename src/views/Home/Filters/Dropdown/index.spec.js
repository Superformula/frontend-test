import React from "react";
import Dropdown from "./index";
import renderer from "react-test-renderer";

test("Dropdown matches the snapshot", () => {
  const component = renderer.create(
    <Dropdown
      items={[
        'a',
        'b',
        'c',
        'd',
        'e',
      ]}
      value="e"
      onChange={() => {}}
      placeholder="I'm a placeholder"
    />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
