import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const ComponentTree = () => (
  <Tree
    lineWidth={"4px"}
    lineColor={"black"}
    lineBorderRadius={"10px"}
    label={"App"}
  >
    <TreeNode label={"Home Page"}>
      <TreeNode label={"Ikea Logo"} />
      <TreeNode label={"Home Page Image"} />
      <TreeNode label={"Summary"} />
    </TreeNode>

    <TreeNode label={"Add Tasks"}>
      <TreeNode label={"Modal Overlayer"}>
        <TreeNode label={"Add Form"} />
      </TreeNode>
      <TreeNode label={"Backdrop"} />
    </TreeNode>

    <TreeNode label={"Tasks"}>
      <TreeNode label={"Sort By"} />
      <TreeNode label={"Incomplete Tasks"} />
      <TreeNode label={"Complete Tasks"} />
    </TreeNode>

    <TreeNode label={"Error"} />
    <TreeNode label={"Component Tree"} />
  </Tree>
);

export default ComponentTree;
