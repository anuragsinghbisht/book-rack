import * as express from 'express';

class IndexRoute {
  public router;

   constructor () {
     this.router = express.Router();
     this.routes();
   }

   private routes(): void {
     this.router.get('/', (req, res) => {
       res.render('index.ejs');
     });

     this.router.get('/login', (req, res) => {
       res.render('login.ejs', { message: req.flash('loginMessage')});
     });

     this.router.get('/signup', (req, res) => {
       res.render('signup.ejs', { message: req.flash('signupMessage')});
     });

     this.router.get('/profile', this.isLoggedIn,  (req, res) => {
       res.render('profile.ejs', { user: req.user });
     });

     this.router.get('/logout',  (req, res) => {
       req.logout();
       res.redirect('/');
     });
   }

   private isLoggedIn(req, res, next): void {
     if (req.isAuthenticated()) {
       next();
     }
     res.redirect('/');
   }
}

export default new IndexRoute().router;
