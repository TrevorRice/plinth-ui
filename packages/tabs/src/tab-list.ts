import { defineComponent, h, inject, provide, ref } from 'vue'
import { TabsContext } from './tabs'
import { TabContext } from './tab'

export default defineComponent({
  name: 'TabList',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const context = inject(TabsContext)
    const children = slots.default?.()
    const tabs = children?.map((child, index) => {
      return h({
        setup() {
          provide(TabContext, { index: ref(index) })
          return () => child
        },
      })
    })

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          // Focus previous tab (or last)
          break

        case 'ArrowUp':
          event.preventDefault()
          // Focus next tab (or first)
          break
        case 'ArrowLeft':
          event.preventDefault()
          // Focus previous tab (or last)
          context?.updateActiveTab(context?.activeIndex.value - 1)
          break
        case 'ArrowRight':
          event.preventDefault()
          // Focus next tab (or first)
          context?.updateActiveTab(context?.activeIndex.value + 1)
          break
        case 'Home':
          event.preventDefault()
          // Focus first tab
          break
        case 'End':
          event.preventDefault()
          // Focus last tab
          break
      }
    }

    return () =>
      h(
        props.as,
        {
          'aria-orientation': context?.orientation,
          role: 'tablist',
          onKeyDown: handleKeyDown,
        },
        tabs
      )
  },
})
