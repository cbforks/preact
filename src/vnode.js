// @ts-nocheck
// Prevent warning of using VNode before declaration in defnition of children property.
/**
 * Virtual DOM Node
 * @typedef VNode
 * @property {string | function} nodeName The string of the DOM node to create or Component constructor to render
 * @property {Array<VNode | string>} children The children of node
 * @property {string | number | undefined} key The key used to identify this VNode in a list
 * @property {Object.<string, any>} attributes The properties of this VNode
 */
export const VNode = function VNode() {};
