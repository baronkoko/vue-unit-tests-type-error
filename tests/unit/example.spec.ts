import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("should render full name", () => {
    const firstName = "Tailor";
    const lastName = "Cox";
    const wrapper = shallowMount(HelloWorld, {
      props: { firstName, lastName },
    });
    expect(wrapper.text()).toMatch(
      `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
    );
  });
});
