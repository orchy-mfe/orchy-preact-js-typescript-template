import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/preact'

import {App} from './app'

describe('app', () => {
    it('renders correctly', () => {
      render(<App />)
      expect(screen.getByText('Click on the Vite and Preact logos to learn more')).toBeDefined()
    })
})