import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { render } from '@testing-library/react';
import { PomoControlMenu } from '@pomocontrol-components';

describe('Test Snapshot of Component', () => {
    it('Comparing snapshot PomoControlMenu', () => {
        const { container  } = render(
            <BrowserRouter>
                <PomoControlMenu />
            </BrowserRouter>
        );

        expect(container.firstChild).toMatchSnapshot();
    })
})