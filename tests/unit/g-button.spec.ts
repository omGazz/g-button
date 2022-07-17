import { shallowMount, mount } from '@vue/test-utils'
import GButton from '@/components/g-button.vue'

describe('GButton.vue', () => {
  it('exist', () => {
    const wrapper = shallowMount(GButton)
    expect(wrapper.exists())
  })

  it("have text value props", () => {
    const text = "save"
    const randomText = "foo"
    const wrapper = shallowMount(GButton, {
      props: { text }
    })

    expect(wrapper.props().text).toBe(text);
    expect(wrapper.props().text).not.toBe(randomText);
  })

  it("have the text prop to be a string", () => {
    const text = "foo";

    const wrapper = shallowMount(GButton, {
      props: { text }
    })

    expect(typeof wrapper.props().text).toBe("string")
  })

  it("have a getter that return same value of prop", () => {
    const text = "foo";

    const wrapper = shallowMount(GButton, {
      props: { text }
    })

    expect(wrapper.vm._text).toEqual(text)
  })

  it("have to be a visible span", () => {
    const textProp = "Foo";
    const wrapper = shallowMount(GButton, {
      props: { textProp }
    })

    expect(wrapper.find("span").element)
    expect(wrapper.find("span").isVisible()).toBe(true);

  })

  it("have to render prop text", () => {
    const textProp = "Foo";
    const wrapper = mount(GButton, {
      props: { textProp }
    })
    const span = wrapper.find("span");
    expect(span.html().includes(textProp)).toBe(true);
  })
})
