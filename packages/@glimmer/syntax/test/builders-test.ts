import { builders as b } from '..';
import { element } from './parser-node-test';
import { astEqual } from './support';

QUnit.module('[glimmer-syntax] AST Builders');

QUnit.test('element uses comments as loc when comments is not an array', function () {
  let actual = element('div', ['loc', b.loc(1, 1, 1, 1)]);
  let expected = element('div', ['loc', b.loc(1, 1, 1, 1)]);

  astEqual(actual, expected);
});

QUnit.test('a node is synthetic when it is built with a builder', function (assert) {
  let node = b.text('hello');
  let syntheticNode = b.text('hello', b.loc(1, 1, 1, 1));

  assert.equal(node.loc.source, '(synthetic)');
  assert.equal(syntheticNode.loc.source, '(synthetic)');
});
