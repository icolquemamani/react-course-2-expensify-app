// Higher Order Component (HOc) - A component (HOC) that renders anther component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = ( props ) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdminWarning = ( WrappedComponet ) => {
    return ( props ) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't shared!</p> }            
            <WrappedComponet {...props}/>
        </div>
    );
};

const requireAuthentication = ( WrappedComponet ) => {
    return ( props ) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponet {...props}/>
            ) : (
                <p>Please login to view info!</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning( Info );
const AuthInfo = requireAuthentication( Info );

// ReactDOM.render(<AdminInfo isAdmin={ true } info="hola" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={ false } info="hola" />, document.getElementById('app'))