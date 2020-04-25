import $ from "jquery";

import exercise15 from "../15-exercise/15-exercise";

describe("15-exercise", () => {
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

  test("output a p element with the form values using $", () => {
    exercise15();

    $("#contact_form").trigger("submit");

    let p = $("#contact_form").children().last();

    expect(p.text()).toBe("alex perez, alex@mail.com");
    expect(p[0].nodeName).toBe("P");
  });
});
