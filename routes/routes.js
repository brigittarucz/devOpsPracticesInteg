// DEFINE THE PATH / HTTP METHOD 

const express = require('express');
const router = express.Router();

const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./local_storage');

router.get('/logout', (req, res) => {
    localStorage.clear();
    return res.redirect('/authenticate');
});

const authController = require('../controllers/authenticate');
const eventsController = require('../controllers/events');
const profileController = require('../controllers/profile');

router.get('/authenticate', authController.getAuth);
router.post('/authenticate/:action', authController.postAuth);

router.get('/dashboard', eventsController.getEvents);
router.post('/dashboard/events', eventsController.postAddEvent);

router.get('/profile', profileController.getProfile);
router.post('/profile', profileController.postProfile);
router.post('/profile/event-delete', profileController.postDeleteFromCalendar);
router.post('/profile/event-add', profileController.postAddFromSuggested);

router.get('/logout', authController.logoutAuth);

// ALWAYS LAST ROUTE

router.get('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
});

module.exports = router;