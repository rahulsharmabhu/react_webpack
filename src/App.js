import React from 'react';
import preshophmac from 'preshophmacdata';

console.log('this is the app page ',preshophmac);

export function App({shop,hmac}) {
    return (
        <div>
            <h1>React App</h1>
            <h2>Shop name : {shop}</h2>
            <h3>HMAC : {hmac}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos delectus voluptatem ab repellat saepe eos molestiae cupiditate, omnis doloremque, necessitatibus totam consectetur porro sint quam libero aperiam? Laborum, quaerat?</p>
        </div>
    );
}