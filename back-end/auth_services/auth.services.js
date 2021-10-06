import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
const Alunos = require('../models/alunos')

// Local
const localOpts = {
     alunonameField: 'username',
};

const localStrategy = new LocalStrategy(localOpts, async (username, password, done) => {
    try {
        const aluno = await Alunos.findOne({
            username
        });
        if (!aluno) {
            return done(null, false);
        } else if (!aluno.authenticateAlunos(password)) {
            return done(null, false);
        }
        return done(null, aluno);
    } catch (e) {
        return done(e, false);
    }
});
passport.use(localStrategy);
export const authLocal = passport.authenticate('local', {
    session: false
});

// JWT
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
    secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
      const aluno = await Alunos.findById(payload._id);
  
      if (!aluno) {
        return done(null, false);
      }
  
      return done(null, aluno);
    } catch (e) {
      return done(e, false);
    }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
export const authJwt = passport.authenticate('jwt', { session: false });