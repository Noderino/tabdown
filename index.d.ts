declare namespace tabdown {
  function parse(lines: string[], marker?: string): TreeNode;
  function traverse(tree: TreeNode, cb?: (node: TreeNode) => void): void;
  function print(tree: TreeNode): void;
  function toJSON(tree: TreeNode): string;

  interface TreeNode {
    new(data: string, depth: number): void;
    data: string;
    depth: number;
    parent: TreeNode;
    children: TreeNode[];
  }
}

export = tabdown;
