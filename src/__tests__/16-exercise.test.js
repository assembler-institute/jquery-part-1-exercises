import $ from "jquery";

import exercise16 from "../16-exercise/16-exercise";

describe("16-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <form action="/" method="post" id="contact_form">
      <label for="name">
        Name
        <input type="text" name="name" id="name" value="alex perez" />
      </label>
      <label for="email">
        Email
        <input type="email" name="email" id="email" value="alex@mail.com" />
      </label>
      <button id="submit_btn">submit</button>
    </form>
  </div>`;
  });

  test("output a p element after the form element using $", () => {
    exercise16();

    $("#contact_form").trigger("submit");

    let p = $("#contact_form").next();

    expect(p.text()).toBe("Message Sent!");
    expect(p[0].nodeName).toBe("P");
  });
});
