import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  it('displays company name', () => {
    renderMainNav()
    screen.debug()
    const companyName = screen.getByText('Jojo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Jojo Careers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
