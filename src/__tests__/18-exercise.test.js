import $ from "jquery";

import exercise18 from "../18-exercise/18-exercise";

describe("18-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item item-1">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the next() method to set the font weight to bold", () => {
    exercise18();

    expect($(".item-1").next().css("font-weight")).toBe("bold");
  });
});
