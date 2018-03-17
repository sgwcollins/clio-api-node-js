var express = require('express');
var router = express.Router();


/* GET auth listing. */

router.get('/intuit', function(req, res, next) {

    // req.session.secret = csrf.secretSync();
    // var state = csrf.create(req.session.secret);

    const credentials = {
        client: {
            id: 'ddU170vXraJukr86T74i7P8HFE6QuI1jlIHsqPr5',
            secret: 'PaQJLzjBJnSNQK7au2YragcmhxWbLysuOeA94ttQ'
        },
        auth: {
            tokenHost: 'https://appcenter.intuit.com/connect/oauth2'
        }
    };

// Initialize the OAuth2 Library
    const oauth2 = require('simple-oauth2').create(credentials);


// Authorization oauth2 URI
    const authorizationUri = oauth2.authorizationCode.authorizeURL({
        redirect_uri: 'http://localhost:3000/callback',
        scope: 'com.intuit.quickbooks.accounting com.intuit.quickbooks.payment', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
        state: 123,
        response_type: 'code'
    });

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    res.redirect(authorizationUri);
});

router.get('/clio', function(req, res, next) {

    // req.session.secret = csrf.secretSync();
    // var state = csrf.create(req.session.secret);

    const credentials = {
        client: {
            id: 'ddU170vXraJukr86T74i7P8HFE6QuI1jlIHsqPr5',
            secret: 'PaQJLzjBJnSNQK7au2YragcmhxWbLysuOeA94ttQ'
        },
        auth: {
            tokenHost: 'https://app.clio.com'
        }
    };

// Initialize the OAuth2 Library
    const oauth2 = require('simple-oauth2').create(credentials);


// Authorization oauth2 URI
    const authorizationUri = oauth2.authorizationCode.authorizeURL({
        redirect_uri: 'http://localhost:3000/callback',
        scope: 'com.intuit.quickbooks.accounting com.intuit.quickbooks.payment', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
        state: 123,
        response_type: 'code'
    });

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    res.redirect(authorizationUri);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;