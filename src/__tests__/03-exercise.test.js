import $ from "jquery";

import exercise03 from "../03-exercise/03-exercise";

describe("03-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="item-1">Lorem ipsum dolor.</li>
    <li class="item-2">Amet repellat nemo sequi.</li>
    <li class="item-3">Adipisicing elit.</li>
  </ul>`;
  });

  test("use the $ comma separated selector to change the list items text", () => {
    exercise03();

    expect($(".item-1").text()).toBe("swapped");
    expect($(".item-2").text()).toBe("swapped");
    expect($(".item-3").text()).toBe("swapped");
  });
});
