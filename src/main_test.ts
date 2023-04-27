import {
  assertEquals,
  remarkParse,
  remarkStringify,
  unified,
} from "../deps.ts";
import remarkRemoveEmptyLinks from "./main.ts";

const pipeline = unified()
  .use(remarkParse)
  .use(remarkRemoveEmptyLinks)
  .use(remarkStringify, {
    bullet: "-",
    emphasis: "_",
    fences: true,
    listItemIndent: "one",
    resourceLink: true,
    rule: "-",
  });

Deno.test("one child in void link", async () => {
  const input = "[foobar]()";
  const expected = "foobar\n";

  const actual = (await pipeline
    .process(input)).toString();

  assertEquals(actual, expected);
});

Deno.test("one nested child in void link", async () => {
  const input = "[**foobar**]()";
  const expected = "**foobar**\n";

  const actual = (await pipeline
    .process(input)).toString();

  assertEquals(actual, expected);
});

Deno.test("two nested children in void link", async () => {
  const input = "[**foo****bar**]()";
  const expected = "**foo****bar**\n";

  const actual = (await pipeline
    .process(input)).toString();

  assertEquals(actual, expected);
});
