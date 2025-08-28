import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Count from '../components/Count';

test("count сбільшує значення i на один",
    async () => {
        render(<Count />)

        const btn = screen.getByRole('button', { name: /Нажато 0 раз/i })
        expect(document.title).toBe('Счетчик: 0')

        await user.click(btn)
        expect(screen.getByRole('button', { name: /Нажато 1 раз/i })).toBeInTheDocument()
        expect(document.title).toBe('Счетчик: 1')

    })