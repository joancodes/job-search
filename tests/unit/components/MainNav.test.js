import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    screen.debug()
    const companyName = screen.getByText('Jojo Careers')
    expect(companyName).toBeInTheDocument()
  })
})
