import $ from "jquery";

import exercise19 from "../19-exercise/19-exercise";

describe("19-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item item-1">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the prev() method to set the font weight to bold", () => {
    exercise19();

    expect($(".item-1").prev().css("font-weight")).toBe("bold");
  });
});
