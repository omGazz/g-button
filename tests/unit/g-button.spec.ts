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
})
