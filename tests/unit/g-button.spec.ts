import { shallowMount } from '@vue/test-utils'
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
})
