import $ from "jquery";

import exercise05 from "../05-exercise/05-exercise";

describe("05-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the eq() method to style the index 2 element", () => {
    exercise05();

    expect($(".ex-list-item:eq(2)").css("padding")).toBe("24px");
    expect($(".ex-list-item:eq(2)").css("fontWeight")).toBe("bold");
  });
});
