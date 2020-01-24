import React from 'react';
import styled from 'styled-components'

const Root = styled.div`
    display: inline-block;

    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width : 320px) {
    /* Styles */
        width: ${props => props.mobile > 4 ? '100%' : (props.mobile / 4) * 100}%;
        display: ${props => props.mobile <= 0 ? 'none' : 'inline-block' };
    }

   /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-width : 320px) and (max-width : 767px) {
    /* Styles */
        width: ${props => props.mobile > 4 ? '100%' : (props.mobile / 4) * 100}%;
        display: ${props => props.mobile <= 0 ? 'none' : 'inline-block' };
    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-width : 768px) and (max-width : 1223px) {
    /* Styles */
        width: ${props => props.tablet > 8 ? '100%' : (props.tablet / 8) * 100}%;
        display: ${props => props.tablet <= 0 ? 'none' : 'inline-block' };
    }

    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 1224px) {
    /* Styles */
        width: ${props => props.desktop > 12 ? '100%' : (props.desktop / 12) * 100}%;
        display: ${props => props.desktop <= 0 ? 'none' : 'inline-block' };

    }
`

const Column = ({ 
    mobile = 0,
    tablet = 0,
    desktop = 0,
    children }) => {
    return (
        <Root
            mobile={mobile}
            tablet={tablet}
            desktop={desktop}
        >{children}</Root>
    )
}

export default Column;