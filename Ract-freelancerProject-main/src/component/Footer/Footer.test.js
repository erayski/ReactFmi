
import { render } from '@testing-library/react';

import Footer from '.';

describe('Footer',()=>{
    it('Should display footer',()=>{
        render(
            
                <Footer/>
           
        );

        expect(document.querySelector('p').textContent)
        .toBe('Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 141 959 042) Copyright © 2021 Freelancer Technology Pty Limited (ACN 141 959 042)');
    })
})
