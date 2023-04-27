import { remarkRemoveEmpty, remarkUnwrap } from "../deps.ts";

/**
 * Removes link node without `url`
 */
const remarkRemoveEmptyLinks = [[remarkUnwrap, {
  childTest: (node, _, parent) =>
    parent?.type == "link" && !parent.url && !parent.title,
  parentTest: undefined,
}], [remarkRemoveEmpty, {
  nodeTest: (node) =>
    node.type == "link" &&
    node.children.length == 0,
}]];

export default remarkRemoveEmptyLinks;
