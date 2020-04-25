import $ from "jquery";

import exercise14 from "../14-exercise/14-exercise";

describe("14-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <form action="/" method="post" id="contact_form">
      <label for="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label for="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <button id="submit_btn">submit</button>
    </form>
  </div>`;
  });

  test("output a mesage when the form values are empty using $", () => {
    exercise14();

    $("#contact_form").trigger("submit");

    let p = $("#contact_form").children().last();

    expect(p.text()).toBe("The values are empty");
    expect(p[0].nodeName).toBe("P");
  });
});
