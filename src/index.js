import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Hello} from "./components/Hello";
import {Comment} from "./components/Comment";
import {Clock} from "./components/Clock";
import {Toggle} from "./components/Toggle";
import {Greeting} from "./components/Greeting";
import {LoginControl} from "./components/LoginControl";
import {Mailbox} from "./components/Mailbox";
import {Page} from "./components/Page/Page";
import {ListItems} from "./components/ListItems";
import {Blog} from "./components/Blog";
import {NameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";
import {Reservation} from "./Reservation";
import {Calculator} from "./components/Calculator";
import {Welcomedialog} from './components/WelcomeDialog/Welcomdialog';
import {MainApp} from "./components/MainApp/MainApp";
import {WelcomeDialogSpecialization} from "./components/WelcomeDialogSpecialization";
import {SignUpDialog} from "./components/SignUpDialog";
import {FilterableProductTable} from "./components/FilterableProductTable";
import {CustomTextInput} from "./components/CustomTextInput";
import {Parent} from "./components/Parent";
import {OuterClickExample} from "./components/OuterClickExample";
import {BlurExample} from "./components/BlurExample";
import {Toolbar} from "./components/Toolbar";
import {App} from "./components/App";
import {AppCont} from "./components/Context/AppCont";
import {AppD} from "./components/Context/dynamic/AppD";
import {ErrorBoundary} from "./components/ErrorBoundaries/ErrorBoundary";
import {MyComponent} from "./components/ErrorBoundaries/MyComponent";
import FancyButton from "./components/ForwardingRefs/logProps";
import {MyComponentR} from "./components/ForwardingRefs/MyComponentR";
import {CustomTextInputR} from "./components/ForwardingRefs/CustomTextInputR";
import {CustomTextInput2} from "./components/ForwardingRefs/CustomTextInput2";
import {CustomTextInputCallBack} from "./components/ForwardingRefs/CustomTextInputCallBack";
import {CustomTextInputForward} from "./components/ForwardingRefs/CustomTextInputForward";
import {CustomTextInputHOC} from "./components/ForwardingRefs/CustomTextInputHOC";
import {Table} from "./components/Fragments/Table";
import {TransformHOC} from "./components/HigherOrderComponents/TransformHOC.js";
import {Example} from "./components/IntegrationWithOhterLibraries/Example";
import {Button} from "./components/IntegrationWithOhterLibraries/Button";
import {BlueDatePicker} from "./components/JSXInDepth/BlueDataPicker";
import {NumberDescription} from "./components/JSXInDepth/NumberDescriber";
import {App1, App2} from "./components/JSXInDepth/App1";
import {App3} from "./components/JSXInDepth/Button";
import {TodoList} from "./components/JSXInDepth/TodoList";
import {CounterButton} from "./components/OptimizingPerformance/CounterButton";
import {CounterButtonPC} from "./components/OptimizingPerformance/CounterButtonPC";
import {WordAdder} from "./components/OptimizingPerformance/WordAdder";
import {AppPortal} from "./components/Portal/AppPortal";
import {ParentPortal} from "./components/Portal/ParentPortal";
import {ToDoList} from "./components/Reconciliation/ToDoList";
import {AutoFocusTextInput} from "./components/Refs/AutoFocusTextInput";
import {CustomTextInputRef} from "./components/Refs/CustomTextInputRef";
import {CustomTextInputFunc} from "./components/Refs/CustomTextInputFunc";
import {CustomTextInputCallback} from "./components/Refs/CustomTextInputCallback";
import {MouseTracker} from "./components/RenderProps/MouseTracker";
import {NewComp} from "./components/RenderProps/MouseTrackerHOC";
import {MouseTrackerPure} from "./components/RenderProps/MouseTrackerPure";
import {NameFormUC} from "./components/UncontrolledComponent/NameFormUC";
import {FileInputUC} from "./components/UncontrolledComponent/FileInputUC";
import {MyComponentAJAX} from "./components/AJAX/MyComponentAJAX";
import {testRenderer} from "./components/TestRender/LinkTR";

const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const img = require('./img/64.jpg');
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: require('./img/64.jpg'),
    }
};

// const element = (
//     <h1>
//         Hello, {formatName(user)}
//     </h1>
// );

const ref = React.createRef();
const messages = ['React', 'Re: React', 'Re: Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcom to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Basketball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$3999.99', stocked: false, name: 'iPone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <Hello name={'Sara'}/>
            <Hello name={'Cahal'}/>
            <Hello name={'Edite'}/>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
            {/*<h2>It is {new Date().toLocaleTimeString()}.</h2>*/}
            <Clock />
            <Toggle/>
            <Greeting isLoggedIn={true}/>
            <LoginControl/>
            <Mailbox unreadMessages={messages}/>
            <Page/>
            <ListItems numbers = {numbers}/>
            <Blog posts={posts}/>
            <NameForm/>
            <EssayForm/>
            <FlavorForm/>
            <Reservation/>
            <Calculator/>
            <Welcomedialog/>
            <MainApp/>
            <WelcomeDialogSpecialization/>
            <SignUpDialog/>
            <FilterableProductTable products={PRODUCTS}/>
            <CustomTextInput/>
            <Parent/>
            <OuterClickExample/>
            <BlurExample/>
            <App />
            <AppCont />
            <AppD/>
            <ErrorBoundary/>
            <MyComponent/>
            {/*<FancyButton ref={ref}>Click me!</FancyButton>*/}
            <MyComponentR/>
            <CustomTextInputR/>
            <CustomTextInput2/>
            <CustomTextInputCallBack/>
            <CustomTextInputForward/>
            <CustomTextInputHOC/>
            <Table/>
            <TransformHOC>Whatever</TransformHOC>
            <Example/>
            <BlueDatePicker/>
            <NumberDescription number={4}/>
            <App1/>
            <App2/>
            <App3/>
            <TodoList/>
            <CounterButton/>
            <CounterButtonPC/>
            <WordAdder/>
            <AppPortal/>
            <ParentPortal/>
            <ToDoList/>
            <AutoFocusTextInput/>
            <CustomTextInputRef/>
            <CustomTextInputFunc/>
            <CustomTextInputCallback/>
            {/*<MouseTracker />*/}
            <NewComp />
            <NameFormUC/>
            <FileInputUC/>
            <MyComponentAJAX/>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
tick();
//setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
