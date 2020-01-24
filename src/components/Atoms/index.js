import A from './A';
import Div from './Div'
import Divider from './Divider'
import Button from './Button';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import Label from './Label';
import Li from './Li';
import Ol from './Ol';
import P from './P';
import Span from './Span';
import Ul from './Ul';

const propertyNames = {};
const elements = [
    A,
    Button,
    Div,
    Divider,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Label,
    Li,
    Ol,
    P,
    Span,
    Ul
];

elements.forEach(elem => {
    propertyNames[elem.name.toLowerCase()] = elem;
})

export default propertyNames;
export {
    A,
    Button,
    Div,
    Divider,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Label,
    Li,
    Ol,
    P,
    Span,
    Ul
}