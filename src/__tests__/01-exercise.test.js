import $ from "jquery";

import exercise01 from "../01-exercise/01-exercise";

describe("01-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="item-1">Lorem ipsum dolor.</li>
    <li class="item-2">Amet repellat nemo sequi.</li>
  </ul>`;
  });

  test("use $ css selectors to change the styles", () => {
    exercise01();

    expect($(".item-1").css("font-weight")).toBe("bold");
    expect($(".item-2").css("padding")).toBe("20px");
  });
});
