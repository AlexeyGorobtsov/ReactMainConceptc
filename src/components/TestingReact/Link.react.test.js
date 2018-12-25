import React from 'react';
import  {LinkTR} from './LinkTR';
import renderer from 'react-test-render';


test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <LinkTR page={'http://www.facebook.com'}>
            Facebook
        </LinkTR>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props._onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props._onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// import React from 'react';
// import LinkTR from './LinkTR';
// import renderer from 'react-test-render';
//
// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//         <LinkTR page="http://www.facebook.com">Facebook</LinkTR>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     // manually trigger the callback
//     tree.props.onMouseEnter();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//
//     // manually trigger the callback
//     tree.props.onMouseLeave();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });